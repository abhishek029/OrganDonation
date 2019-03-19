export default{
    template:`
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
            <p class="col-sm-12 col-md-6 offset-md-3 text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi officia saepe blanditiis vero nostrum quae iusto possimus minus necessitatibus? Voluptatem ab esse animi veniam perspiciatis labore suscipit voluptates alias! All you need is health card and a couple of minutes to become an organ donor.</p>
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
    `,

    data(){
        return{
            currentDonorDetails: {},

            retrivedDonor: []
            }
        },
        created: function(){
            this.loadDonors("1");
        },
        methods:{
            loadDonors(donorId){            

                let url = `./admin/scripts/index.php?donor=${donorId}`;

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