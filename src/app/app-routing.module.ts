import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";
import { UserComponent } from "./shared/components/users/user/user.component";
import { UserFormComponent } from "./shared/components/users/user-form/user-form.component";
import { ProductFormComponent } from "./shared/components/products/product-form/product-form.component";
import { ProductComponent } from "./shared/components/products/product/product.component";

//BaseUrl :  http://localhost:4200/

const routes : Routes = [
    {
        path : '', // http://localhost:4200/
        component : HomeComponent
    },
    {
        path : 'home', // http://localhost:4200/home
        component : HomeComponent
    },
    {
        path : 'users', // http://localhost:4200/users
        component : UsersComponent
    },
    {
        path : 'users/addUser', // http://localhost:4200/users/addUser
        component : UserFormComponent
    },
    {
        path : 'users/:userId', // http://localhost:4200/users/123
        component : UserComponent
    },
    {
        path : 'users/:userId/editUser', // http://localhost:4200/users/123/editUser
        component : UserFormComponent
    },
    {
        path : 'products', // http://localhost:4200/products
        component : ProductsComponent
    },
    {
        path : 'products/addproduct', // http://localhost:4200/products/addproduct
        component : ProductFormComponent
    },
    {
        path : 'products/:productId', // http://localhost:4200/products/123
        component : ProductComponent
    },
    {
        path : 'products/:productId/editProduct', // http://localhost:4200/users/123/editProduct
        component : ProductFormComponent
    },
    {
        path : 'page-not-found', 
        component : PagenotfoundComponent
    },
    {
        path : '**', // wildcard routing {its added to last of our routing configration}
        redirectTo : 'page-not-found'
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})


export class AppRoutingModule{

}

//wildcard Routing : It matches any url that isn't define in our configration array