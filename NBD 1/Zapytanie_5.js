db.people.find(
    {
        birth_date:
        {
            $gte: "2001-01-01",
            $lt: "2101-01-01T00:00:00Z"
        }
    },
    {
        first_name: 1,
        last_name: 1,
        _id: 0,
        "location.city": 1
    }
).forEach(printjson)