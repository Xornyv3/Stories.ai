$(document).ready(function() {
  // Smooth scrolling function
  $("a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('body,html').animate({
              scrollTop: $(hash).offset().top
          }, 1200, function() {
              window.location.hash = hash;
          });
      }
  });

  // Open modal when clicking "Read" button
  $(".read-story-btn").click(function() {
      var storyId = $(this).data("story");
      var modal = $("#modal");
      var modalContent = modal.find(".modal-content");

      // Function to get story content based on storyId
      var getStoryContent = function(storyId) {
          switch (storyId) {
              case "gilded-six-bits":
                  return `
                      <p>In a small town in Florida during the 1930s, there lived a young couple, Missie May and Joe. They were deeply in love, and Joe adored Missie May for her beauty and cheerfulness. Joe worked hard at his job as a railroad porter, saving up his money, and every Saturday afternoon he would come home with a silver dollar for Missie May, a symbol of his love and devotion.

Their happiness seemed perfect until one day when a slick stranger named Otis D. Slemmons came to town. Otis was a flashy and wealthy man who drove a big car and wore extravagant clothes. He opened an ice cream parlor and dazzled the townspeople with his charm and generosity.

Otis took a liking to Joe and would often visit their home, bringing expensive gifts and spending money freely. Missie May was initially flattered by Otis's attention and the luxurious lifestyle he represented. Joe, trusting and innocent, believed Otis was simply a generous friend.

However, one fateful day, Joe returned home early and caught Otis and Missie May in a compromising situation. Heartbroken and devastated, Joe confronted Missie May, who tearfully confessed her betrayal. Joe was shattered, feeling the pain of betrayal by both his wife and his friend.

In a fit of rage and hurt, Joe kicked Otis out of their house and lashed out at Missie May. She begged for forgiveness, realizing the depth of her mistake and the pain she had caused. Joe, torn between his love for Missie May and the betrayal he felt, struggled to come to terms with what had happened.

Over time, Joe tried to forgive Missie May and rebuild their relationship. Missie May, repentant and determined to regain Joe's trust, showered him with affection and worked hard to make amends. Slowly, their love began to heal the wounds caused by Otis's deceit.

One day, Otis returned to town, but this time, the townspeople saw through his facade. They realized he was a fraud who had deceived them all with his charm and false generosity. Otis left town as quickly as he had come, leaving behind a trail of broken trust and shattered illusions.

Through forgiveness and understanding, Joe and Missie May found a way to forgive each other and themselves. They learned that true love and happiness cannot be bought with money or appearances, but must be nurtured through honesty, trust, and commitment..</p>
                  `;
              case "the-lottery":
                  return `
                      <p>In a small village nestled among rolling hills, there lived a community of people who gathered once a year for a ritual known as "the lottery." It was a sunny morning in June when the villagers, men chatting amiably and women exchanging small talk, assembled in the town square. Children played nearby, gathering stones into a pile, their laughter filling the air.

Mr. Summers, a jovial man who conducted the lottery, arrived with an old black box. Its sides were worn and its corners faded from years of use. The villagers regarded the box with a mixture of reverence and apprehension, knowing its significance in their tradition.

Names were called, and each head of household stepped forward to draw a slip of paper from the box. Bill Hutchinson drew the paper with the black dot. His wife, Tessie, gasped and protested, "It wasn't fair!" But the villagers urged her to continue, as tradition dictated.

In the second round, each member of the Hutchinson family drew again. This time, Tessie's hand trembled as she opened her paper to reveal the black dot. A hush fell over the crowd. Tessie pleaded desperately, but the villagers closed in around her.

With chilling efficiency, they gathered the stones the children had collected earlier. Tessie's own family, including her husband and children, took their places among the villagers. Tears streamed down Tessie's face as the first stone struck her, followed by others until she lay still on the ground.

The villagers dispersed quietly, as if nothing out of the ordinary had occurred. They returned to their homes, leaving behind the empty square and the black box, a symbol of their unyielding tradition.

"The Lottery" by Shirley Jackson portrays the unsettling power of blindly following rituals and the shocking depths to which human nature can descend in the name of tradition.</p>
                      <!-- Add full story content here -->
                  `;
              case "cat-person":
                  return `
                      <p>Margot, a 20-year-old college student, works part-time at a movie theater. One day, she meets Robert, a man in his mid-thirties, when he buys a ticket from her. They strike up a conversation, exchanging friendly banter and phone numbers.

Over the next few days, Margot and Robert exchange texts, discovering shared interests and making plans to go on a date. Margot feels a mix of excitement and nervousness as she prepares for their evening together.

On the night of their date, Margot meets Robert at a bar. They chat over drinks, and Margot notices Robert's awkwardness but dismisses it, finding him endearing. As the evening progresses, they share personal stories and Margot begins to feel a connection with Robert, imagining a potential future with him.

They end up at Robert's apartment, where things quickly turn intimate. Margot feels conflicted but goes along with it, not wanting to disappoint Robert or appear prudish. During their encounter, Margot's feelings become increasingly ambivalent, but she continues anyway, hoping for a positive outcome.

Afterward, Margot realizes that she is not as interested in Robert as she had initially thought. She begins to pull away, making excuses and avoiding his texts. Robert's texts become increasingly desperate and clingy, making Margot feel uncomfortable and regretful about their encounter.

Margot reflects on the complexities of modern dating, where initial attraction can quickly give way to uncertainty and disappointment. She grapples with her own desires, fears, and societal expectations, navigating the blurred lines between consent and coercion in intimate relationships.

"Cat Person" by Kristen Roupenian delves into the nuances of modern romance and the dynamics of power and vulnerability between individuals. It resonates with readers for its candid portrayal of the complexities of desire, communication, and the often murky waters of sexual consent in the digital age.</p>
                      <!-- Add full story content here -->
                  `;
              case "the-lesson":
                  return `
                      <p>On a hot summer day in New York City, a group of African American children, led by a girl named Sylvia, gather in front of their apartment building. Miss Moore, a no-nonsense woman from their neighborhood, arrives and announces that she's taking them on a field trip.

Miss Moore leads the children through bustling streets to a toy store in a wealthy part of town. The contrast between their own neighborhood and the affluent area strikes the children, especially Sylvia, who is skeptical and defensive.

Inside the store, the children are mesmerized by the extravagant toys and prices. They encounter items that cost more than what their families spend on groceries for the entire week. Sylvia feels a mix of awe and resentment, questioning the fairness of such disparities.

Miss Moore guides them to a sailboat priced at $1,195, prompting Sylvia to calculate the cost in disbelief. She becomes increasingly aware of the economic disparities and systemic inequalities that shape their lives compared to those of the wealthy.

After leaving the store, the children gather in a nearby park, where Sylvia grapples with the lessons of the day. Miss Moore challenges them to think critically about the world around them and the opportunities they may lack due to their socioeconomic circumstances.

"The Lesson" by Toni Cade Bambara is a poignant exploration of socioeconomic inequality and the harsh realities faced by marginalized communities. Through the eyes of Sylvia and her friends, readers confront the stark contrasts between privilege and poverty, highlighting the importance of education, awareness, and social justice.</p>
                      <!-- Add full story content here -->
                  `;
              default:
                  return ""; // Return empty string or handle default case
          }
      };

      // Get story content based on storyId
      var storyContent = getStoryContent(storyId);

      // Update modal content
      modalContent.html(storyContent);

      // Display modal
      modal.css("display", "block");
  });

  // Close modal when clicking the close button (X)
  $(".close").click(function() {
      $("#modal").css("display", "none");
  });

  // Close modal when clicking outside the modal content
  $(window).click(function(event) {
      var modal = $("#modal");
      if (event.target == modal[0]) {
          modal.css("display", "none");
      }
  });

  // Background image scaling on scroll
  var width = $(window).width();
  window.onscroll = function() {
      if (width >= 900) {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              $("#middle").css("background-size", "150% auto");
          } else {
              $("#middle").css("background-size", "100% auto");
          }
      }
  };

  // Loading animation
  setTimeout(function() {
      $("#loading").addClass("animated fadeOut");
      setTimeout(function() {
          $("#loading").removeClass("animated fadeOut");
          $("#loading").css("display", "none");
      }, 800);
  }, 1450);
});
