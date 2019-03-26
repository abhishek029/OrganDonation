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
            <section class="row info">
                <h2 class="col-md-12 col-sm-12 text-center">Who Can Donate ?</h2>
                <p class="col-md-12 col-sm-12">Selecting the right donor for a live donor liver transplant requires experience, skill and technical expertise on the
                    part of the many doctors, nurses and other health care professionals who make up the Live Donor Team.
                    Potential live liver donors are carefully evaluated. The health and safety of the donor is the most important concern
                    during the evaluation. Only donors in good health are considered.</p>
                
        </section>
        <section class="row transplant">
            <div class="col-md-6 col-sm-12">
                <h2 class="text-center">A potential donor should:</h2>
                <p>Be either a relative, spouse or friend
                    Have a compatible blood type
                    Be in good overall health and physical condition
                    Be older than 19 years of age and younger than 55 years of age
                    Have a near normal body mass index (not obese)</p>
            </div>
            <div class="col-md-6 col-sm-12">
                <h2 class="text-center">A donor must be free from:</h2>
                <p>History of Hepatitis B or C
                    HIV infection
                    Alcohol dependence/abuse
                    Substance abuse
                    Major mental illness unresponsive to treatment
                    A recent history of cancer</p>
            </div>
        </section>
        <section class="row transplant">
                <h2 class="col-md-12 col-sm-12 text-center">Live Donor Liver Transplantation</h2>
                <div class="col-md-12 col-sm-12">Usually, livers for transplantation come from donors who have died. Some may have registered their wishes with
                        the Organ Donor Registry, if not their family may have given permission. Unfortunately, there are not enough
                        deceased donor organs available for today’s growing list of people who are waiting for a transplant. Many patients
                        waiting for liver transplants become too sick to undergo transplant surgery, or die while on the waiting list.
                        Success with live kidney transplantation stimulated the development of live donor liver transplantation. The first
                        successful live donor liver transplant was performed in the United States in 1989 from a mother to her child, who
                        had irreversible liver damage. Since that time, thousands of children and adults have received live donor liver
                        transplants.
                        In a live donor liver transplant, a portion of the liver is surgically removed from a live donor and transplanted into
                        a recipient immediately after the recipient’s liver has been entirely removed.
                        Live donor liver transplantation is possible because the liver (unlike any other organ in the body) has the ability to
                        regenerate or grow. Both halves of the liver used for transplantation regenerate to the size of a normal liver within
                        a period of 4-8 weeks. Today, many transplant centres are performing these life saving surgeries.</div>
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