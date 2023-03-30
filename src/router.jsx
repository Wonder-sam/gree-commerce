import { onAuthStateChanged } from "firebase/auth";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import ContactUs from "./ContactUs";
import { cart, categories, recipes } from "./dummydata";
import FilterDrawer from "./FilterDrawer";
import { auth } from "./firebase";
import Header from "./Header";
import MyCart from "./MyCart";
import ProductDetails from "./ProductDetails";
import Products from "./Products";
import RecipeDetails from "./RecipeDetails";
import Recipes from "./Recipes";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const getCategories= async ()=>{
    return [categories, recipes];
}

const getCategory = async (num) => {
    return categories[num].products;
}

const getCatProducts = async (name) => {
    let result = categories.find(element=>element.category===name).products;
    console.log(result)
    return result;
}

const getRecipes = async () => {
    return recipes;
}

const getRecipe = async (num) => {
    return recipes[num];
}

const getProducts = async () => {
    let products = []
    categories.forEach(categories => {
        products = products.concat(categories.products)
    });
    return products;
}

const getProduct=async(cat, prod)=>{
    let cats = await getCatProducts(cat)
    let targetProduct = cats.find(element=>element.name===prod)
    return targetProduct
}

const getUser = async () => {
    onAuthStateChanged(auth, user=>{
        if(user !==null){
            return user.displayName
        }
    })
    return null;
}
const getCart= async ()=>{
    return cart;
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
                    ]
                },
                {
                    path:"/Product/spices/:category/:id",
                    element: <ProductDetails/>,
                    loader: ({params})=> getProduct(params.category, params.id)
                },
                {
                    path: '/Recipes',
                    element: <Recipes />,
                    loader: getRecipes,
                },
                {
                    path: '/Recipes/:id',
                    element: <RecipeDetails />,
                    loader: ({params})=>getRecipe(params.id)
                },
                {
                    path: '/Cart',
                    element: <MyCart />,
                    loader: getCart
                },
                {
                    path: '/ContactUs',
                    element: <ContactUs />
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
    basename: '/spice-haven'
    }
  )
  
  export default router;
  