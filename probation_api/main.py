import psycopg2
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_reviews():
    connection = None
    cursor = None

    try:
        connection = psycopg2.connect(
            user = "postgres",
            password = "f0d8fd809e28",
            host = "localhost",
            port = "5432",
            database = "postgres"
        )
        cursor = connection.cursor()
        print("Connected to the DB!")
       
        cursor.execute("SELECT * FROM reviews;")
        result = cursor.fetchall()
        return result
    except(Exception, psycopg2.Error) as error:
        print("Error connecting to PostgreSQL database!", error)
        connection = None

    finally:
        if (connection is not None):

            if (cursor is not None):
                cursor.close()

            connection.close()
            print("PostgreSQL connection is now closed!")

@app.get("/reviews")
def read_root():
    reviews = get_reviews()

    if not reviews:
        return {
            "country": {},
            "city": {},
            "hotel": {},
            "visit_type": {}
        }

    group_by_hotel = {}
    group_by_country = {}
    group_by_city = {}
    group_by_visit_type = {}
    for review in reviews:
        if review[1] not in group_by_hotel:
            group_by_hotel[review[1]] = [review]
        else:
            group_by_hotel[review[1]].append(review)

        if review[2] not in group_by_city:
            group_by_city[review[2]] = [review]
        else:
            group_by_city[review[2]].append(review)

        if review[3] not in group_by_country:
            group_by_country[review[3]] = [review]
        else:
            group_by_country[review[3]].append(review)

        if review[4] not in group_by_visit_type:
            group_by_visit_type[review[4]] = [review]
        else:
            group_by_visit_type[review[4]].append(review)

    return {
        "country": group_by_country,
        "city": group_by_city,
        "hotel": group_by_hotel,
        "visit_type": group_by_visit_type
    }
