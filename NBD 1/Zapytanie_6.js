printjson(
    db.people.insert(
        {
            "sex": "Male",
            "first_name": "Michał",
            "last_name": "Łuniewski",
            "job": "Student",
            "email": "s24101@pjwstk.edu.pl",
            "location": {
                "city": "Warsaw",
                "address": {
                    "streetname": "Polna",
                    "streetnumber": "12"
                }
            },
            "description": "Opis",
            "height": "178",
            "weight": "75",
            "birth_date": "1997-08-04T12:12:12Z",
            "nationality": "Poland",
            "credit": [
                {
                    "type": "millenium",
                    "number": "12345678912345678",
                    "currency": "PLN",
                    "balance": "100"
                }
            ]
        }
    )
)