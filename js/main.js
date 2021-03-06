(() => {
    const HomePageComponent = { 
        template: `
        <div>
            <section id="promo" class="row">
                <div class="col-sm-6 offset-sm-2" id="text">
                    <h2 class="col-sm-8">TWO MINUTES COULD SAVE EIGHT LIVES</h2>
                    <p class="col-sm-8">All you need is health card and a couple of minutes to become an organ donor. 
                        <a href="https://www.ontario.ca/page/organ-and-tissue-donor-registration?utm_source=so&utm_medium=keyword&utm_campaign=original/" target="_blank">Sign up now!</a>
                    </p>
                </div>
            </section>
        
            <section class="row" id="adds">
                <div class="col-sm-12">
                    <img class="col-sm-8 offset-sm-2" src="images/thumbnail.jpg" alt="Barbara Thomas">
                    <p class="col-sm-12 col-md-6 offset-md-3 text-center"> 
                    The primary objective is to promote awareness of life saving solid organ transplants. The secondary objective is to promote awareness of tissue and life-enhancing transplants. As well so,to significantly increase the number of members of the public registered as organ and tissue donors
                    </p>
                </div>
            </section>
            
            <section class="row" id="content">
                <div class="col-xs-12 col-md-4">
                    <img src="images/hourglass.svg" alt="Hourglass" class="col-sm-4 offset-sm-5 img-responsive">
                    <p class="col-sm-6 offset-sm-4 text-center">4500 Canadains and 1500 ontarians are currently waiting for Organ Donation</p> 
                </div>
        
                <div class="col-xs-12 col-md-4">
                    <img src="images/heart.svg" alt="Heart" class="col-sm-4 offset-sm-5">
                    <p class="col-sm-6 offset-sm-4 text-center">Your current or past medical history does not prevent you from registering to be a donor</p>                    
                </div>
                    
                <div class="col-xs-12 col-md-4">
                    <img src="images/eight.svg" alt="Eight" class="col-sm-4 offset-sm-5"> 
                    <p class="col-sm-6 offset-sm-4 text-center">One donor can save up to 8 lives through donation and enhance even more through the gift pf tissue</p>                
                </div>
            </section>
        </div>
        `
    }
    
    const QuizComponent = {
        template: `
        <div id="quiz">
            <section class="row">
                <div class="col-xs-10 offset-sm-3 col-sm-6">
                    
                    <div class="col-xs-6">
                        <h2 class="col">ORGAN DONATION QUIZ</h2>
                    </div>

                    <div class="col-xs-10">
                        <p class="col">There's a lot of misinformation out there about organ donation. Can you seperate the facts from fiction?</p>
                    </div>
                    
                    <div class="col-xs-4 offset-xs-3 offset-sm-4">
                        <a href="quiz/quiz.html" target="_blank" class="offset-xs-4 btn playBtn">PLAY NOW</a>
                    </div>                  
                    
                </div>
            </section>
        </div>
        `
    }
    const VideoComponent = {
        template: ` 
        <div>
            <section class="row" id="mainVideo">
            <div class="col-sm-12">
                <video class="col-sm-8 offset-sm-2" :src="'video/'+currentDonorDetails.donor_video" type="video/mp4" controls>
                
                </video>
                <div class="row offset-2">
                <div class="col-sm-3">
                    <img class="col" :src="'images/' + currentDonorDetails.donor_thumb" alt="donor">
                </div>
                <div class="col-sm-6">
                    <h3>{{currentDonorDetails.donor_name}}</h3>
                    <p>{{currentDonorDetails.donor_desc}}</p>
                </div>
                 </div>
                <a class="col-4 btn offset-sm-4 playBtn"  href="https://www.ontario.ca/page/organ-and-tissue-donor-registration?utm_source=so&utm_medium=keyword&utm_campaign=original/" target="_blank"><b>REGISTER NOW</b></a>
            </div>
            </section>

            <!-- code for all recipients in database -->
            <section class="row" id="moreVideo">
                <div v-for="donor in retrivedDonor" @click='changeDonor(donor)' class="col-md-3 sm-12">
                    <img class="col-sm-10 offset-sm-2" :src="'images/'+donor.donor_thumb" :alt="donor.donor_name">
                    <h3 class="col-sm-10 offset-sm-2 text-center">{{donor.donor_name}}</h3>
                    <p class="col-sm-10 offset-sm-2  text-center">{{donor.donor_desc}}</p> 
                </div>               
            </section>

            <section class="row" id="contactStory">
                <h2 id="shareHead" class="col-sm-4 offset-sm-2">SHARE YOUR STORY</h2>
                <p class="col-sm-8 offset-sm-2">
                    Are you an organ donation recipient who is willing to share your story? We'd love to hear from you an use your experience to help spread awareness of the pressing need for organ donors.
                </p>
            </section>
        </div>
    `,

    data(){
        return{
            
        currentDonorDetails: {},

        retrivedDonor: []
        }
    },

    created: function(){
        console.log("this is vue created");
        this.loadDonors();
    },

    methods:{
        calledOnParent(){
            console.log("this method is from vue");
        },
        changeDonor(donor){
            console.log("current dodor changed to "+donor.donor_name);
            this.currentDonorDetails = donor;
        },

        loadDonors(){            
            
            let url = `./admin/scripts/index.php?donor=1`;

            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.retrivedDonor = data;
                    this.currentDonorDetails = data[0];
                })
                .catch(function(error){
                    console.error(error);
                });
        }
    }
}
    const ErrorPageComponent = {
        template: "<h2>This is Error page</h2>"
    }

    const routes =[
        { path: '/', name: 'home', component:HomePageComponent},
        { path: '/quiz', name: 'contact', component:QuizComponent},
        { path: '/video', name: 'video', component:VideoComponent},
        { path: '/*', name: 'error', component:ErrorPageComponent},
    ]
    const router = new VueRouter({
        routes
    });
    //Vue instance
    const vm = new Vue({
        el: "#app",
        data:{
            testmessage: "sup",
            
            
        },

        created: function(){
            console.log("this is vue created");
            this.loadDonors();
        },

        methods:{
            calledOnParent(){
                console.log("this method is from vue");
            },
            loadDonors(){            
                
                let url = `./admin/scripts/index.php?donor=1`;
    
                console.log(url);
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        this.retrivedDonor = data;
                        this.currentDonorDetails = data[0];
                    })
                    .catch(function(error){
                        console.error(error);
                    });
            }
        },
        components:{
            'homepagecomponent' : HomePageComponent,
            'signupcomponent' :QuizComponent,
            'videocomponent' :VideoComponent,
            'errorpagecomponent' : ErrorPageComponent
        },
        
        router
    })
})();