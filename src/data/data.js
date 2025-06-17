export const towers = [
  {
    "id": "A",
    "name": "Tower A",
    "description": "Luxury waterfront living",
    "floors": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    "id": "B",
    "name": "Tower B",
    "description": "Urban boss residences",
    "floors": [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    "id": "C",
    "name": "Tower C",
    "description": "Executive family homes",
    "floors": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
]

export const floors = {
  "A": [
    {
      "number": 1,
      "description": "Ground floor with retail space"
    },
    {
      "number": 2,
      "description": "Residential floor - panoramic views"
    }
  ],
  "B": [
    {
      "number": 1,
      "description": "Commercial spaces"
    }
  ],
  "C": [
    {
      "number": 1,
      "description": "Amenities floor"
    }
  ]
}

export const layouts = {
  "A": {
    "1": [
      {
        "id": "A1-101",
        "type": "Retail",
        "area": "1200 sqft",
        "rooms": 1,
        "image": "/placeholder-retail.jpg"
      }
    ],
    "2": [
      {
        "id": "A2-201",
        "type": "2-Bedroom",
        "area": "850 sqft",
        "rooms": 2,
        "image": "/placeholder-2bed.jpg"
      },
      {
        "id": "A2-202",
        "type": "1-Bedroom",
        "area": "650 sqft",
        "rooms": 1,
        "image": "/placeholder-1bed.jpg"
      }
    ]
  },
  "B": {
    "1": [
      {
        "id": "B1-101",
        "type": "Office",
        "area": "1500 sqft",
        "rooms": 3,
        "image": "/placeholder-office.jpg"
      }
    ]
  }
}