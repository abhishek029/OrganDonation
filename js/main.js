(() => {
    const HomePageComponent = { 
        template: `
        <section id="promo" class="row">
        <div class="col-sm-6 offset-sm-2" id="text">
            <h2 class="col-sm-8">TWO MINUTES COULD SAVE EIGHT LIVES</h2>
            <p class="col-sm-8">All you need is health card and a couple of minutes to become an organ donor. 
                <a href="https://beadonor.ca/" target="_blank">Sign up now!</a>
            </p>
        </div>
        </section>
        `
    }
    
    const SignupComponent = {
        template: `
        <h2>Subscribe From</h2>
        `
    }
    const VideoComponent = {
        template: ` 
        <h2>Gallery Page</h2>
    `
    }
    const ErrorPageComponent = {
        template: "<h2>This is Error page</h2>"
    }

    const routes =[
        { path: '/', name: 'home', component:HomePageComponent},
        { path: '/contact', name: 'contact', component:SignupComponent},
        { path: '/video', name: 'video', component:VideoComponent},
        { path: '/*', name: 'error', component:ErrorPageComponent},
    ]
    const router = new VueRouter({
        routes
    });
    //Vue instance
    const vn = new Vue({
        el: "#app",
        data:{
            testmessage: "sup"
        },
        methods:{
            calledOnParent(){
                console.log("this method is from vue");
            }
        },
        created: function(){
            console.log("this is vue created");
        },
        components:{
            'homepagecomponent' : HomePageComponent,
            'signupcomponent' :SignupComponent,
            'videocomponent' :VideoComponent,
            'errorpagecomponent' : ErrorPageComponent
        },
        
        router
    })
})();