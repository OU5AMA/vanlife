const vans = [
    {
        id: 1,
        image: "https://s1.cdn.autoevolution.com/images-webp/news/slim-chance-van-conversion-is-the-perfect-companion-for-thrill-seeker-travelers-219284-7.jpg.webp",
        title: "Modest Explorer",
        type: "Simple",
        price: 60,
        description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
    },
    {
        id: 2,
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/off-highway-van-lead-1596636660.jpg?crop=1.00xw:0.753xh;0,0.174xh&resize=1200:*",
        title: "Adventure Seeker",
        type: "Deluxe",
        price: 80,
        description: "The Adventure Seeker is perfect for those who want to explore the great outdoors in style. Equipped with modern amenities, solar power, and a spacious interior, this van ensures a comfortable and memorable journey."
    },
    {
        id: 3,
        image: "https://i.insider.com/5fdb8ac9c910a400192e8140?width=1000&format=jpeg&auto=webp",
        title: "Urban Nomad",
        type: "Compact",
        price: 50,
        description: "The Urban Nomad is designed for city dwellers looking for a quick escape. With a compact design, it is easy to drive and park, yet still offers all the essentials for a comfortable adventure."
    },
    {
        id: 4,
        image: "https://i.insider.com/5fdb8c49c910a400192e8158?width=1000&format=jpeg&auto=webp",
        title: "Family Traveller",
        type: "Family",
        price: 90,
        description: "The Family Traveller is ideal for family road trips. It offers plenty of space, safety features, and entertainment options to keep everyone happy and comfortable during the journey."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1525102674904-bc05fa78e8b2",
        title: "Solo Explorer",
        type: "Solo",
        price: 45,
        description: "The Solo Explorer is perfect for solo travelers who crave adventure. Compact yet fully equipped, this van allows you to travel light and experience nature up close."
    },
    {
        id: 6,
        image: "https://www.outsidevan.com/wp-content/uploads/2023/03/VanSpotlight_Paramount_Thumbnail_Website-1.jpg",
        title: "Luxury Liner",
        type: "Luxury",
        price: 150,
        description: "The Luxury Liner offers unparalleled comfort and style for your adventures. Featuring premium amenities, high-end finishes, and plenty of space, this van ensures a luxurious travel experience."
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTZdvh25-vDBm-t1pHShZzHX6HYQ-7qN3Qj1uzZ8tGvRsB4X8m_QsM3G8p6Ei9XNgDuc&usqp=CAU",
        title: "Rugged Rover",
        type: "Rugged",
        price: 100,
        description: "The Rugged Rover is built for tough terrains and off-road adventures. Equipped with all-terrain tires, reinforced suspension, and essential gear, this van is perfect for exploring the wild."
    },
    {
        id: 8,
        image: "https://www.motortrend.com/uploads/2023/04/033-Outside-Van-Approach-2023-Mercedes-Benz-Sprinter-170.jpg",
        title: "Comfort Cruiser",
        type: "Luxury",
        price: 140,
        description: "The Comfort Cruiser provides a smooth and relaxing journey with its plush interior and advanced features. Perfect for long trips, it combines luxury with functionality."
    },
    {
        id: 9,
        image: "https://cdn.getawaycouple.com/wp-content/uploads/2022/02/23093504/sprintervanmountinas.jpg",
        title: "Mountain Mover",
        type: "Rugged",
        price: 110,
        description: "The Mountain Mover is designed for high-altitude adventures and rough roads. With its robust build and powerful engine, it handles challenging landscapes with ease."
    },
    {
        id: 10,
        image: "https://res.cloudinary.com/outdoorsy/image/upload/v1673992639/p/rentals/166919/images/vu31khnkjdbbsh4islzw.jpg",
        title: "Eco Explorer",
        type: "Simple",
        price: 65,
        description: "The Eco Explorer is environmentally friendly, featuring solar panels and energy-efficient systems. It's perfect for eco-conscious travelers who want to minimize their footprint."
    },
    {
        id: 11,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCD6W02X-LvEo2Bnsyl8wMbgJIl1uv5c3Mxe26aPbD_LjiDKoziOlHOo6huJgnMbyfJhU&usqp=CAU",
        title: "Beach Bum",
        type: "Simple",
        price: 70,
        description: "The Beach Bum is perfect for coastal trips, equipped with everything you need for a beach getaway. Its bright, airy interior and ample storage make it ideal for beach lovers."
    },
    {
        id: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCCcPlaOUA4zdEReETbArFFHiqOmZ47A9JbTIeXOo3HABfJ-3wS_knmKmxHPUUusxOl4&usqp=CAU",
        title: "Safari Sprinter",
        type: "Rugged",
        price: 120,
        description: "The Safari Sprinter is perfect for wildlife enthusiasts and those who love the savannah. With its elevated seating and panoramic windows, it offers an excellent view of the surroundings."
    },
    {
        id: 13,
        image: "https://t4.ftcdn.net/jpg/05/28/55/43/360_F_528554330_Q52u19jMwI6tPwS6wOP4wCl6nYqO42Oi.jpg",
        title: "Urban Adventurer",
        type: "Compact",
        price: 55,
        description: "The Urban Adventurer is a versatile van designed for city escapes and urban exploration. Compact and easy to maneuver, it is equipped with modern amenities for a comfortable stay."
    },
    {
        id: 14,
        image: "https://i.ytimg.com/vi/1NRSDU8KLxI/maxresdefault.jpg",
        title: "Glamper Van",
        type: "Luxury",
        price: 160,
        description: "The Glamper Van combines glamour and camping, offering a high-end experience in the wilderness. With luxurious interiors and state-of-the-art features, it redefines outdoor living."
    },
    {
        id: 15,
        image: "https://i.ytimg.com/vi/UKdTqS5ZqDg/maxresdefault.jpg",
        title: "Rocky Rider",
        type: "Rugged",
        price: 105,
        description: "The Rocky Rider is perfect for mountainous terrains and rocky paths. Built to withstand tough conditions, it provides a secure and thrilling ride through challenging environments."
    }
];

export default vans;