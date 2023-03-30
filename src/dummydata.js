import haven from './assets/haven.jpg'
import haven1 from './assets/haven1.jpg'
import haven2 from './assets/haven2.jpg'
import rosemary from './assets/rosemary.jpg'
import rosemary1 from './assets/rosemary1.jpg'
import rosemary2 from './assets/rosemary2.jpg'
import mixedspices from './assets/mixedspices.jpg'
import mixedspices1 from './assets/mixedspices1.jpg'
import mixedspices2 from './assets/mixedspices2.jpg'
import gingermix from './assets/gingermix.jpg'
import kebab from './assets/kebab.jpg'
import kebabpowder from './assets/kebabpowder.jpg'
import jerk from './assets/jerk.jpg'
import beefspice from './assets/beefspice.jpg'
import chickenspice from './assets/chickenspice.jpg'
import barbercuespice from './assets/barbercuespice.jpg'
import kebabspice from './assets/kebabspice.jpg'
import chilly from './assets/chilly.jpg'
import jollof from './assets/jollof.jpg'
import kelewele from './assets/kelewele.jpg'
import gingermix1 from './assets/gingermix1.jpg'
import gingermix2 from './assets/gingermix2.jpg'
import gingermix3 from './assets/gingermix3.jpg'
import jerkspices from './assets/jerkspices.jpg'
import jerkspices1 from './assets/jerkspices1.jpg'
import jerkspices2 from './assets/jerkspices2.jpg'
import curry from './assets/curry.jpg'
import curry1 from './assets/curry1.jpg'
import goatmeat from './assets/goatmeat.jpg'
import group2 from './assets/group2.jpg'
// import brownsugar from './assets/brownsugar.jpg'

export const categories = [
    {
        category: "Chicken Spices",
        description: "backpacks, sidebags, waist bags and many more",
        img: chickenspice,
        products: [
            {
                name: "Ginger Mix",
                category: "Chicken Spices",
                price: 44.99,
                images: [gingermix, gingermix1, gingermix2, gingermix3],
                description: 'A blend of ginger and other spices like cinnamon and nutmeg, that is used to add flavor to baked goods like gingerbread and cookies, as well as savory dishes like stir-fries and marinades.'
            },
            {
                name: "Mixed Spices",
                category: "Chicken Spices",
                price: 44.99,
                images: [mixedspices2, mixedspices, mixedspices1],
                description: 'A blend of garlic and other spices like onion and pepper, that can be used to add flavor to a variety of dishes. It is particularly useful for seasoning meats, vegetables, and sauces.'
            },
            {
                name: "Rosemary Spices",
                category: "Chicken Spices",
                price: 44.99,
                images: [rosemary2,rosemary, rosemary1],
                description: 'A fragrant herb with needle-like leaves that is commonly used in Mediterranean cuisine. It has a distinctive woody flavor that goes well with roasted meats, potatoes, and bread.'
            },
            {
                name: "Curry Spices",
                category: "Chicken Spices",
                price: 44.99,
                images: [curry, curry1],
                description: ' A blend of spices that typically includes turmeric, cumin, coriander, and ginger. Curry powder is commonly used in Indian and Southeast Asian cuisines to add flavor and color to meat, fish, and vegetable dishes.'
            }
        ]
    },
    {
        category: "Beef Spices",
        description: "smart phones, Tablets, Ipads, Ipods, Accessories",
        img: beefspice,
        products: [
            {
                name: "Chilly Flake",
                category: "Beef Spices",
                price: 44.99,
                images: [chilly, curry1],
                description: 'Dried and crushed red chili peppers that can be used to add heat and flavor to a variety of dishes. They are often used to season pizza, pasta, and stir-fries, and can be sprinkled on top of soups and stews for an extra kick of spice.'
            },
            {
                name: "Jerk Spices",
                category: "Beef Spices",
                price: 44.99,
                images: [jerk, jerkspices, jerkspices1, jerkspices2],
                description: "A blend of herbs and spices that is used to marinate and season chicken in Jamaican cuisine. It typically includes allspice, thyme, garlic, ginger, and Scotch bonnet peppers, and gives the chicken a spicy and smoky flavor."
            },
        ]
    },
    {
        category: "Barbercue Spices",
        description: "wrist watches, necklaces,",
        img: barbercuespice,
        products: [
            {
                name: "Ginger Mix",
                category: "Barbercue Spices",
                price: 44.99,
                images: [gingermix, gingermix1, gingermix2, gingermix3],
                description: 'A blend of ginger and other spices like cinnamon and nutmeg, that is used to add flavor to baked goods like gingerbread and cookies, as well as savory dishes like stir-fries and marinades.'
            },
            {
                name: "Chilli flakes",
                category: "Barbercue Spices",
                price: 44.99,
                images: [chilly, curry1],
                description: 'Dried and crushed red chili peppers that can be used to add heat and flavor to a variety of dishes. They are often used to season pizza, pasta, and stir-fries, and can be sprinkled on top of soups and stews for an extra kick of spice.'
            },
            {
                name: "Kebab Powder",
                category: "Barbercue Spices",
                price: 44.99,
                images: [kebab, kebabpowder],
                description: 'A blend of spices that is commonly used to season grilled or roasted meats, particularly kebabs. It typically includes cumin, coriander, paprika, garlic, and chili powder, and gives the meat a flavorful and spicy kick.'
            }
        ]
    },
    {
        category: "Kebab Spices",
        description: "wrist watches, necklaces, earrings, anklets",
        img: kebabspice,
        products: [
            {
                name: "Jerk Spices",
                category: "Kebab Spices",
                price: 44.99,
                images: [jerk, jerkspices, jerkspices1, jerkspices2],
                description: "A blend of herbs and spices that is used to marinate and season chicken in Jamaican cuisine. It typically includes allspice, thyme, garlic, ginger, and Scotch bonnet peppers, and gives the chicken a spicy and smoky flavor."
            },
            {
                name: "Chilli flakes",
                category: "Kebab Spices",
                price: 44.99,
                images: [chilly, curry1],
                description: 'Dried and crushed red chili peppers that can be used to add heat and flavor to a variety of dishes. They are often used to season pizza, pasta, and stir-fries, and can be sprinkled on top of soups and stews for an extra kick of spice.'
            },
            {
                name: "Kebab Powder",
                category: "Kebab Spices",
                price: 44.99,
                images: [kebab, kebabpowder],
                description: 'A blend of spices that is commonly used to season grilled or roasted meats, particularly kebabs. It typically includes cumin, coriander, paprika, garlic, and chili powder, and gives the meat a flavorful and spicy kick.'
            }
        ]
    }
]

export const caro =[
    
    {
        img: haven,
        title: "19BX Backpack",
        info: "The all new awaited bag of the season. The 19BX Backpack. Grap yours now @ 12% discount !!!",
        alt: "19BX backpack"

    },
    {
        img: haven1,
        title: "19BX Backpack",
        info: "The all new awaited bag of the season. The 19BX Backpack. Grap yours now @ 12% discount !!!",
        alt: "19BX backpack"

    },
    {
        img: haven2,
        title: "19BX Backpack",
        info: "The all new awaited bag of the season. The 19BX Backpack. Grap yours now @ 12% discount !!!",
        alt: "19BX backpack"

    },
    {
        img: group2,
        title: "19BX Backpack",
        info: "The all new awaited bag of the season. The 19BX Backpack. Grap yours now @ 12% discount !!!",
        alt: "19BX backpack"
    },
]

export var cart = [
    {
        name: "Ginger Mix",
        price: 44.99,
        image: gingermix,
        description: 'A blend of ginger and other spices like cinnamon and nutmeg, that is used to add flavor to baked goods like gingerbread and cookies, as well as savory dishes like stir-fries and marinades.',
        quantity: 1
    },
    {
        name: "Jerk Spices",
        price: 44.99,
        image: jerk,
        description: "A blend of herbs and spices that is used to marinate and season chicken in Jamaican cuisine. It typically includes allspice, thyme, garlic, ginger, and Scotch bonnet peppers, and gives the chicken a spicy and smoky flavor.",
        quantity: 1
    },
]


export const recipes = [
    {
        title: "Corned beef jollof",
        equipments: ["Sauce", "Pan", "Rubber", "spatula", "Glass", "Mixing", "Bowl"],
        ingredients: ["3 Cups Superior Long Grain Rice", "340 g Canned Corned Beef", "200 g Tomato Paste", "6 Medium Tomatoes Pureed", "6 Scotch Bonnet Peppers Blended", "1 Tsp Curry Powder", "1 Tsp White Pepper", "1 Tsp Ground Nutmeg", "1 Large Green Bell Pepper Chopped", "1 Large Carrot Sliced", "1½ Tbsp Salt", "1¼ Cup Vegetable Oil"],
        instructions: [
            "Heat vegetable oil in a saucepan over medium heat.", 
            "Add sliced onions, garlic, stir and let sweat for a minute." , 
            "Add tomato paste, stir and let simmer for 2 minutes.", 
            "Add tomato purèe, scotch bonnet pepper, stir and let simmer down for 8 minutes. stir occasionally.",
            "Add curry powder, white pepper, nutmeg, salt, stir and let simmer for 2 minutes.",
            "Add corned beef, stir and let simmer for 3 minutes",
            "Wash the superior jasmine rice and drain off the water",
            "Add the washed rice into the stew, add salt, 200ml of water, stir and let cook for 35 minutes, stirring occasionally.",
            "Add chopped green bell peppers, carrots, stir and let cook for 2 minutes.",
            "Corned beef jollof rice ready. Serve with coleslaw and shito."
        ],
        image: jollof
    },
    {
        title: "Rosemary infused kelewele",
        equipments: [ "Chopping Board", "Sharp knife", "Glass Mixing Bowl", "Rubber spatula", "Frying Pan", "Spider Spoon", "Seave"],
        ingredients: ["2 Ripe Plantains", "1 Tsp Smoked Paprika", "1 Tsp Ground Cloves", "1 Tsp Ground Ginger", "1 Tsp Garlic Powder", "1 Tsp Chili Powder", "1 Tsp Stalk of Fresh Rosemary", "300 ml Vegetable Oil", "1 Tsp Salt"],
        instructions: [
            "Peel and cut the plantain into chunks.", 
            "Add smoked paprika, ground cloves, ground ginger, garlic powder, chilli powder, salt, stir and set aside.", 
            "Heat vegetable oil in a pan over medium heat, drop the fresh rosemary stalk and let fry for a minute, then add the spiced plantain.", 
            "Stir and deep-fry until golden for 10 minutes.", "Take out and place on a paper towel to drain excess oil.", 
            "Rosemary infused kelewele ready to serve"
        ],
        image: kelewele
    },
    {
        title: "Goat meat",
        equipments: ["Sauce Pan", "Ladle", "Blender", "Seave"],
        ingredients: ["1 Pound of Goat Meat", "2 Medium Tomatoes", "3 Medium Garden Eggs", "10 Red Scotch Bonnet Peppers", "1 Medium Onion", "3 Tbsp Tomato Paste", "4 Tbsp Ginger and Garlic Paste", "½ An Onion Diced", "2 Cubes Beef Seasoning", "Pinch of salt"],
        instructions: ["Pour goat meat into a saucepan over medium heat, add ginger and garlic paste.", "Add beef seasoning, diced onion, salt, water, stir and let cook for 15 minutes.", "Add tomatoes, onion, red chilli, garden eggs, stir and let cook until it's soft and tender.", "Take out and blend.", "Add tomato paste, stir and let simmer for 2 minutes.", "Strain the blended mixture into the saucepan, stir and let simmer for 15 - 20 minutes.", "Adjust seasoning to your taste.", "Ready to serve."],
        image: goatmeat
    }
]