import psycopg2

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
   
    cursor.execute(
        "CREATE TABLE IF NOT EXISTS reviews (\n"
            "id         UUID PRIMARY KEY,\n"
            "hotel      VARCHAR(80) NOT NULL,\n"
            "country    VARCHAR(80) NOT NULL,\n"
            "city       VARCHAR(80) NOT NULL,\n"
            "visit_type VARCHAR(40) NOT NULL CHECK (visit_type in ('business', 'private')),\n"
            "text       VARCHAR(300) NOT NULL,\n"
            "score      INTEGER CHECK(score > 0 AND score <= 5)\n"
        ");"
    )
    connection.commit()
    print("Tables created!")

except(Exception, psycopg2.Error) as error:
    print("Error connecting to PostgreSQL database!", error)
    connection = None

finally:
    if (connection is not None):

        if (cursor is not None):
            cursor.close()

        connection.close()
        print("PostgreSQL connection is now closed!")
