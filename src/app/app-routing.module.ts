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
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { AuthComponent } from "./shared/components/auth/auth.component";
import { FairsComponent } from "./shared/components/fairs/fairs.component";
import { UserRoleGuard } from "./shared/services/user-role.guard";
import { FairsdetailsComponent } from "./shared/components/fairs/fairsdetails/fairsdetails.component";
import { UsersResolverService } from "./shared/services/users-resolver.service";
import { ProductsResolverService } from "./shared/services/products-resolver.service";
import { FairsResolverService } from "./shared/services/fairs-resolver.service";
import { CompDeactivateGuard } from "./shared/services/comp-deactivate.guard";

//BaseUrl :  http://localhost:4200/

const routes : Routes = [
    {
        path : '', // http://localhost:4200/
        component: AuthComponent
        // component : HomeComponent,
        // canActivate : [AuthGaurd],
    },
    {
        path : 'home', // http://localhost:4200/home
        component : HomeComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        data : {
            userRole : ['buyer', 'admin', 'sa']
        },
        title: 'Home'
    },
    {
        path : 'users', // http://localhost:4200/users
        component : UsersComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        resolve : {usersData : UsersResolverService},
        data : {
            userRole : ['admin', 'sa']
        },
        title: 'Users',
        children : [
            {
                path : '',
                redirectTo : '1',
                pathMatch : 'full'
            },
            {
                path : 'addUser', // http://localhost:4200/users/addUser
                component : UserFormComponent
            },
            {
                path : ':userId', // http://localhost:4200/users/123
                component : UserComponent
            },
            {
                path : ':userId/editUser', // http://localhost:4200/users/123/editUser
                component : UserFormComponent
            }
        ]
    },
    // {
    //     path : 'users/addUser', // http://localhost:4200/users/addUser
    //     component : UserFormComponent
    // },
    // {
    //     path : 'users/:userId', // http://localhost:4200/users/123
    //     component : UserComponent
    // },
    // {
    //     path : 'users/:userId/editUser', // http://localhost:4200/users/123/editUser
    //     component : UserFormComponent
    // },
    {
        path : 'products', // http://localhost:4200/products >> In Child routing - parentPath == products
        component : ProductsComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        // canActivateChild : [AuthGaurd, UserRoleGuard],
        resolve: {productsData : ProductsResolverService},
        data : {
            userRole : ['buyer', 'admin', 'sa']
        },
        title: 'Products',
        children : [
            // {
            //     path : '',
            //     redirectTo : '1?canReturn=1',
            //     pathMatch : 'full'
            // },
            {
                path : 'addproduct', // parentPath/addproduct
                component : ProductFormComponent
            },
            {
                path : ':productId', // parentPath/123
                component : ProductComponent
            },
            {
                path : ':productId/editProduct', // parentPath/123/editProduct
                component : ProductFormComponent,
                canDeactivate: [CompDeactivateGuard]
            }
        ]
    },
    // {
    //     path : 'products/addproduct', // http://localhost:4200/products/addproduct
    //     component : ProductFormComponent
    // },
    // {
    //     path : 'products/:productId', // http://localhost:4200/products/123
    //     component : ProductComponent
    // },
    // {
    //     path : 'products/:productId/editProduct', // http://localhost:4200/products/123/editProduct
    //     component : ProductFormComponent
    // },

    {
        path: 'fairs',
        component: FairsComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        resolve: {fairsData : FairsResolverService},
        data : {
            userRole : ['sa']
        },
        title: 'Fairs',
        children : [
            {
                path: ':fairId',
                component: FairsdetailsComponent
            }
        ]
    },  
    {
        path : 'page-not-found', 
        component : PagenotfoundComponent,
        data : {
            msg : 'page not found !!!' // static data >> we can get where we want it ,forEx- componenet or services
        }
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


export class AppRoutingModule{ }

//wildcard Routing : It matches any url that isn't define in our configration array.