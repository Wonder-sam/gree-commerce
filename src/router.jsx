import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import { categories, recipes } from "./dummydata";
import FilterDrawer from "./FilterDrawer";
import { auth } from "./firebase";
import Header from "./Header";
import Products from "./Products";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const getCategories= async ()=>{
    return [categories, recipes];
}

const getCategory = async (num) => {
    return categories[num].products;
}

const getRecipe = async (num) => {
    return recipes[num].products;
}

const getProducts = async () => {
    let products = []
    categories.forEach(categories => {
        products = products.concat(categories.products)
    });
    recipes.forEach(recipe=>{
        products = products.concat(recipe.products)
    })
    return products;
}

const getUser = async () => {
    onAuthStateChanged(auth, (user) => {
        if(user !==null){
            return user.displayName
        }
    })
    return null;
}

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header />,
            loader: getUser,

            children: [
                {
                    index: true,
                    element: <App />,
                    loader: ()=>redirect('/Explore'),
                },
                {
                    path: "/Explore",
                    element: <App />,
                    loader: getCategories
                },
                {
                    path: '/Product',
                    element: <FilterDrawer />,
                    children: [
                        {
                            index: true,
                            element: <Products/>,
                            loader: getProducts
                        },
                        {
                            path:"spices/:category",
                            element: <Products/>,
                            loader: ({params})=> getCategory(params.category)
                        },
                        {
                            path:"recipes/:name",
                            element: <Products/>,
                            loader: ({params})=> getRecipe(params.name)
                        },
                    ]
                }
            ]
        },
        {
            path: '/SignIn',
            element: <SignIn />
        },
        {
            path: '/SignUp',
            element: <SignUp />
        }
    ],
    {
    basename: '/gree-commerce'
    }
  )
  
  export default router;
  