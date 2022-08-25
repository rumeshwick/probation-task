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
        "INSERT INTO reviews (id, hotel, city, country, visit_type, text, score) VALUES\n"
            "('b0452e2c-4cd7-4c02-a3d0-3c90bd0e8603', 'Hilton', 'Paris', 'France', 'private', 'Amazing view', 3),\n"
            "('b7d8dd56-42fd-48a2-ad9e-88e6e4784f49', 'Accor', 'London', 'England', 'business', 'Very very loud. Could barely sleep!', 1),\n"
            "('2dbbe893-fe61-4909-a2aa-fe7ecfb2d794', 'Hilton', 'Lyon', 'France', 'business', 'Very peacefull!', 5),\n"
            "('465a3302-3595-4277-8a29-fccc0f154b94', 'Sheraton', 'Paris', 'France', 'private', 'The bed sheets were not very clean', 3),\n"
            "('e09c0f96-ef2e-4ab9-af9c-68bbc087d5b5', 'Accor', 'Berlin', 'Germany', 'private', 'Nice!', 4),\n"
            "('e41da050-9633-4204-b686-7571ac639f34', 'Marriott', 'Madrid', 'Spain', 'business', 'I liked it!', 4),\n"
            "('439a3e83-afc6-46e4-8cc7-978a6ed34be7', 'Hilton', 'Paris', 'France', 'business', 'Awesome!', 4),\n"
            "('9c040463-3f17-4cfd-95cb-94fb82e9960f', 'Hilton', 'Barcelona', 'Spain', 'private', 'Not great!', 3),\n"
            "('a54245d7-0935-4fd3-84e7-f1bdfe864cc9', 'Marriott', 'Lisbon', 'Portugal', 'business', 'Meh...', 3),\n"
            "('a05879b2-25f5-4fb4-ade0-31309f09a734', 'Hilton', 'Athens', 'Greece', 'private', 'Pretty dirty!', 2),\n"
            "('6451fd83-722e-4ff6-8429-13f13193c93b', 'Hilton', 'Bucharest', 'Romania', 'private', 'Loved the bed!', 4),\n"
            "('416f9ca4-df01-4743-ba17-e021bf525d7e', 'Marriott', 'Chicago', 'U.S.A.', 'private', 'Food was horrible!', 2),\n"
            "('df863150-44eb-4408-9391-e627eac2439c', 'Marriott', 'Los Angeles', 'U.S.A.', 'private', 'It was expensive and bad!', 1),\n"
            "('9529bc19-410a-4dcb-9cff-1b822e406fd7', 'Hilton', 'Hamburg', 'Germany', 'private', 'Worst hotel ever!', 1),\n"
            "('ca93c627-f1aa-446a-8249-00475d630c6a', 'Sheraton', 'Munich', 'Germany', 'business', 'Best hotel ever!', 5),\n"
            "('704d2fe1-2287-412c-aeaa-8d96984841ad', 'Marriott', 'Lyon', 'France', 'business', 'Just awesome', 5),\n"
            "('1d91e29c-d38d-4271-9f63-0c78b605b2e2', 'Hilton', 'Madrid', 'Spain', 'business', 'Super friendly staff', 5),\n"
            "('8d09c15c-a7eb-4d97-ae1e-2a3c57fed599', 'Marriott', 'Paris', 'France', 'private', 'So nice and quiet!', 5),\n"
            "('c64c2af1-5a70-4422-ade8-d1d120104222', 'Hilton', 'Madrid', 'Spain', 'private', 'Great hotel', 5),\n"
            "('9a022ac4-5db6-49e5-89a3-b39c9f1304cd', 'Hilton', 'Barcelona', 'Spain', 'private', 'Nice hotel!', 4),\n"
            "('b30a3cdd-6fe4-455b-be30-daa8d35f323a', 'Marriott', 'Sibiu', 'Romania', 'private', 'Kinda expensive', 3),\n"
            "('069f9b9a-f71d-453a-8ef0-9422d5f2dc7e', 'Hilton', 'London', 'England', 'business', 'Best room service I have seen!', 5),\n"
            "('ca8f79f7-dcea-4493-bc0b-0ec7829b53cd', 'Marriott', 'Los Angeles', 'U.S.A.', 'private', 'There was no water for 2 hours', 2),\n"
            "('16c95c51-32d4-4f3c-9eb5-fdc74ad84439', 'Sheraton', 'Los Angeles', 'U.S.A.', 'business', 'Very loud!', 3),\n"
            "('ec638eb8-6e81-4ddd-9ef6-1f2fe2712518', 'Sheraton', 'Berlin', 'Germany', 'private', 'Should have slept on the street, would have been better! ', 1),\n"
            "('f25f9866-8b7d-4753-b732-717633a4487f', 'Accor', 'Munich', 'Germany', 'business', 'I liked the meals', 4);"
    )
    connection.commit()

    cursor.execute("SELECT count(*) FROM reviews;")
    result = cursor.fetchall()
    print(f"{result[0][0]} rows inserted!")

except(Exception, psycopg2.Error) as error:
    print("Error connecting to PostgreSQL database!", error)
    connection = None

finally:
    if (connection is not None):

        if (cursor is not None):
            cursor.close()

        connection.close()
        print("PostgreSQL connection is now closed!")
