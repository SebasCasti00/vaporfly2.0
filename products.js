var products = [
    {
        name: 'Nike Air Max 2090',
        price: 150,
        rating: 5,
        ratingimg: '/images/rating5.png',
        gender: 'men',
        description: 'Bring the past into the future with the Nike Air Max 2090. Inspired by the iconic Air Max 90, the 2090 features Nike Air cushioning underfoot that adds unparalleled comfort, while transparent mesh on the upper blend with timeless OG features for an edgy, modernized look.',
        img: '/images/airmax2090.jpg'
    },
    {
        name: 'Nike Air VaporMax Plus',
        price: 200,
        rating: 5,
        ratingimg: '/images/rating5.png',
        gender: 'men',
        description: 'The Nike Air VaporMax Plus gets updated with colors inspired by the Windy City. Nodding to the futuristic 98 Air Max Plus with its floating cage, cushioned upper and heel logo, it adds revolutionary VaporMax Air technology to ramp up your comfort, modern look and defiant style.',
        img: '/images/airmaxVapormax.jpg'
    },
    {
        name: 'Nike React Phantom Run Flyknit 2',
        price: 140,
        rating: 4.5,
        ratingimg: '/images/rating45.png',
        gender: 'men',
        description: 'The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it "disappears" on your foot. More foam means better cushioning, keeping you comfortable as you run.',
        img: '/images/reactphantom.jpg'
    },
    {
        name: 'Nike Air Force 1 07',
        price: 110,
        rating: 4,
        ratingimg: '/images/rating4.png',
        gender: 'men',
        description: 'The legend lives on in the Nike Air Force 1 07—a modern take on the iconic AF1 that blends classic style with sweet details. A stitched tag logo runs down the tongue while over-branding throughout reinforces Nike heritage.',
        img: '/images/airforce107.jpg'
    },
    {
        name: 'LeBron 17 Low',
        price: 160,
        rating: 4.3,
        ratingimg: '/images/rating45.png',
        gender: 'men',
        description: 'Fine-tuned with LeBrons ferocious game in mind, the LeBron 17 Low has a sleek, low-top design that features a powerful combination of impact-ready cushioning and responsiveness.',
        img: '/images/lebron17low.jpg'
    },
    {
        name: 'Nike Free Metcon 3',
        price: 120,
        rating: 4.5,
        ratingimg: '/images/rating45.png',
        gender: 'men',
        description: 'The Nike Free Metcon 3 combines Nike Free flexibility around the forefoot with Metcon stability in the heel to help you get the most out of your training session.',
        img: '/images/freeMetcon.jpg'
    },
    {
        name: 'Nike Air Max 90',
        price: 130,
        rating: 3.9,
        ratingimg: '/images/rating4.png',
        gender: 'men',
        description: 'The Nike Air Max 90 has been redesigned for casual wear while staying true to its 90s running roots. The Max Air unit helps cushion each step while the solid-rubber waffle outsole maximizes traction.',
        img: '/images/airmax90bright.jpg'
    },
    {
        name: 'Nike Killshot 2 Leather',
        price: 90,
        rating: 4.1,
        ratingimg: '/images/rating4.png',
        gender: 'men',
        description: 'Inspired by the OG low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, its court-side attitude with a modern touch. To prove youre on top, the rubber gum sole adds the cherry on bottom.',
        img: '/images/killshot2leather.jpg'
    },
    {
        name: 'Air Jordan 1 Low SE',
        price: 100,
        rating: 3.8,
        ratingimg: '/images/rating38.png',
        gender: 'men',
        description: 'Lace up one of historys most iconic sneakers in the Air Jordan 1 Low. This SE sticks to the classic details like chunky overlays and overt stitching, but gives it a fresh color-up for the season.',
        img: '/images/airjordan1low.jpg'
    },
    {
        name: 'Nike React Vision',
        price: 140,
        rating: 4.9,
        ratingimg: '/images/rating5.png',
        gender: 'men',
        description: 'The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story.',
        img: '/images/reactvisionmens.jpg'
    },
    {
        name: 'Nike Air Max 90',
        price: 120,
        rating: 4.3,
        ratingimg: '/images/rating45.png',
        gender: 'men',
        description: 'After 30 years, the peoples shoe returns with the Nike Air Max 90. A faithful remake of the OG, it is defined by the comfort, clean lines and stitched overlays that grabbed the hearts of sneaker wearers. Premium leather, classic TPU accents and bold splashes of color tie the look together.',
        img: '/images/airmax90dark.jpg'
    },
    {
        name: 'Nike Air Max 97',
        price: 170,
        rating: 4.1,
        ratingimg: '/images/rating4.png',
        gender: 'men',
        description: 'The Air Max 97 shook up the running world with its revolutionary full-length Nike Air unit. The Nike Air Max 97 remasters the original design with bold new colors and flashes of gold.',
        img: '/images/airmax97.jpg'
    },
    {
        name: 'Nike Air Zoom Pegasus 37',
        price: 120,
        rating: 3.8,
        ratingimg: '/images/rating38.png',
        gender: 'women',
        description: 'The Air Max 97 shook up the running world with its revolutionary full-length Nike Air unit. The Nike Air Max 97 remasters the original design with bold new colors and flashes of gold.',
        img: '/images/airzoompegasus37women.jpg'
    },
    {
        name: 'Nike Air Max 97',
        price: 170,
        rating: 4.1,
        ratingimg: '/images/rating4.png',
        gender: 'women',
        description: 'Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running.',
        img: '/images/airmax97womenWhite.jpg'
    },
    {
        name: 'Nike Air Max Verona',
        price: 130,
        rating: 4.3,
        ratingimg: '/images/rating45.png',
        gender: 'women',
        description: 'Pass on the good vibes in the Nike Air Max Verona. Elegant and versatile, its mixed-material upper features a plush collar, flashy colors and unique stitching patterns. The Nike Air cushioning adds a modern twist, comfort and style to your journey.',
        img: '/images/airmaxveronawomen.jpg'
    },
    {
        name: 'Nike Air Max 270',
        price: 150,
        rating: 4.3,
        ratingimg: '/images/rating45.png',
        gender: 'women',
        description: 'Inspired by 2 icons of Air, the Air Max 180 and Air Max 93, the Nike Air Max 270 goes bigger and bolder. Combining an extra-large heel Air unit yet with a highly breathable upper and a splash of retro summer colors, it offers you',
        img: '/images/airmax270women.jpg'
    },
    {
        name: 'Nike ZoomX Vaporfly NEXT%',
        price: 250,
        rating: 5,
        ratingimg: '/images/rating5.png',
        gender: 'women',
        description: 'The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking speed with a lighter design and faster feel than before. With more cushioning underfoot and reduced weight up top, the result is unprecedented energy return and comfort.',
        img: '/images/zoomxvaporfly.jpg'
    },
    {
        name: 'Nike Air Zoom Spiridon Cage 2',
        price: 140,
        rating: 4,
        ratingimg: '/images/rating4.png',
        gender: 'women',
        description: 'First released in 2003, the Nike Air Zoom Spiridon Cage 2 is as relevant today as it was then. It features the original design lines and caged Zoom Air unit for a responsive ride back to the 2000s.',
        img: '/images/airzoomspiridon.jpg'
    },
    {
        name: 'Nike Vista Lite',
        price: 110,
        rating: 4.4,
        ratingimg: '/images/rating45.png',
        gender: 'women',
        description: 'The Nike Vista Lite is giving us all the summertime vibes. Bright color accents highlight the bold design that ramps every outfit to the next level.',
        img: '/images/vistalitewomens.jpg'
    },
    {
        name: 'Nike Air Zoom SuperRep',
        price: 120,
        rating: 3.9,
        ratingimg: '/images/rating38.png',
        gender: 'women',
        description: 'The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, stable heel to keep you moving and lifting comfortably.',
        img: '/images/airzoomsuperrepwomen.jpg'
    },
]

module.exports = products;