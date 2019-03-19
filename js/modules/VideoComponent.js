export default{
    template:`
    <div id="container">
        <section class="row" id="mainVideo">
            <div class="col-sm-12">
                <video class="col-sm-8 offset-sm-2" controls>
                <source src="video/video1.mp4"></source>
                </video>
                <p class="col-sm-6 offset-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi officia saepe blanditiis vero nostrum quae iusto possimus minus necessitatibus? Voluptatem ab esse animi veniam perspiciatis labore suscipit voluptates alias! All you need is health card and a couple of minutes to become an organ donor.</p>
                <button class="col-sm-4 offset-sm-4 playBtn">REGISTER NOW</button>
            </div>
        </section>

        <section class="row" id="moreVideo">
                <div class="col-sm-3">
                    <video class="col-sm-9 offset-sm-3" controls>
                    <source src="video/video1.mp4"></source>
                    </video>
                    
                    <h3 class="col-sm-9 offset-sm-3">Recipient 1</h3>
                    <p class="col-sm-9 offset-sm-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quis velit atque ad praesentium voluptates aliquam nesciunt quo quidem. Repellat, voluptatibus. Voluptatem amet pariatur voluptas consequuntur quam ab consequatur vel!</p> 
                </div>
        </section>
        
        <section class="row" id="contactStory">
                <h2 id="shareHead" class="col-sm-4 offset-sm-2">SHARE YOUR STORY</h2>
                <p class="col-sm-8 offset-sm-2">
                    Are you an organ donation recipient who is willing to share your story? We'd love to hear from you an use your experience to help spread awareness of the pressing need for organ donors.
                </p>
                <button class="col-sm-4 offset-sm-4 contactBtn">CONTACT US</button>
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