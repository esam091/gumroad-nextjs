import Image, { StaticImageData } from "next/image";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";
import image6 from "./images/6.jpeg";
import image7 from "./images/7.jpeg";
import image8 from "./images/8.jpeg";
import image9 from "./images/9.jpeg";
import image10 from "./images/10.jpeg";
import SolidStarIcon from "@/icons/SolidStarIcon";
import Link from "next/link";

export default function RecommendationSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-h2">Recommended</h2>

      <div
        className="flex overflow-scroll gap-5 snap-x snap-mandatory py-1"
        style={{ scrollbarWidth: "none" }}
      >
        <ProductCard
          image={image1}
          name="Cosmic Planner"
          shop="StarLight Designs"
          price="$24.99"
          rating="4.8"
          description="Embark on a stellar journey of productivity with the Cosmic Planner! This digital planner is designed for dreamers and doers who want to organize their universe of tasks, goals, and ideas. Featuring stunning cosmic-themed pages adorned with stars, galaxies, and nebulae, this planner combines functionality with out-of-this-world aesthetics."
        />

        <ProductCard
          image={image2}
          name="Whimsical Watercolor Brushes Redefined"
          price="$19.99"
          rating="4.9"
          shop="Palette Paradise"
          description="Unleash your creativity with our Whimsical Watercolor Brushes set! This collection of 50+ high-quality digital brushes brings the soft, dreamy quality of traditional watercolors to your digital canvas."
        />

        <ProductCard
          image={image3}
          name="Zen Garden Soundscapes"
          shop="Tranquil Tones"
          price="$14.99"
          rating="4.7"
          description="Transform your space into a tranquil oasis with Zen Garden Soundscapes. This collection of 10 carefully composed audio tracks blends the gentle sounds of nature with soothing instrumental melodies, creating the perfect atmosphere for relaxation, meditation, or focused work"
        />

        <ProductCard
          image={image4}
          name="Pixel Perfect Platformer Assets"
          shop="Retro Realm Games"
          price="$39.99"
          rating="4.9"
          description="Level up your game development with Pixel Perfect Platformer Assets! This comprehensive pack includes over 1000 meticulously crafted pixel art elements to bring your 2D platformer to life."
        />

        <ProductCard
          image={image5}
          name="Savory Sourdough Secrets"
          shop="Breadhead Bakery"
          price="$12.99"
          rating="4.8"
          description='Uncover the art and science of perfect sourdough with "Savory Sourdough Secrets"! This comprehensive eBook is your guide to creating bakery-quality sourdough bread at home.'
        />

        <ProductCard
          image={image6}
          name="Mindful Meditation Masterclass"
          shop="Inner Peace Institute"
          price="$49.99"
          rating="4.7"
          description="Embark on a transformative journey with the Mindful Meditation Masterclass. This comprehensive online course is designed to guide you from meditation novice to mindfulness expert in just 8 weeks."
        />

        <ProductCard
          image={image7}
          name="Eco-Chic Crochet Patterns"
          shop="Green Yarn Creations"
          price="$17.99"
          rating="4.8"
          description="Combine your love for crochet with eco-conscious living with our Eco-Chic Crochet Patterns collection. This digital pattern book features 15 stylish and sustainable crochet projects, all designed to be made with eco-friendly yarns and materials."
        />

        <ProductCard
          image={image8}
          name="Cyberpunk Character Creator"
          shop="Neon Nexus Designs"
          price="$29.99"
          rating="4.9"
          description="Dive into the neon-soaked future with the Cyberpunk Character Creator! This powerful digital tool allows artists, game developers, and cyberpunk enthusiasts to design unique, highly detailed characters for illustrations, games, or storytelling."
        />

        <ProductCard
          image={image9}
          name="Vintage Vector Vehicles"
          shop="Retro Ride Graphics"
          price="$22.99"
          rating="4.8"
          description="Rev up your design projects with our Vintage Vector Vehicles collection! This expansive set features 100 meticulously crafted vector illustrations of classic vehicles spanning the 1920s to the 1980s."
        />

        <ProductCard
          image={image10}
          name="Minimalist Budgeting Blueprint"
          shop="SimpleCents Slutions"
          price="$9.99"
          rating="4.7"
          description="Simplify your finances and achieve your money goals with the Minimalist Budgeting Blueprint. This sleek, easy-to-use digital budgeting system is designed for those who want an effective yet uncomplicated approach to managing their money."
        />
      </div>
    </section>
  );
}

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  shop: string;
  rating: string;
  price: string;
  description: string;
}

function ProductCard({
  image,
  name,
  shop,
  price,
  description,
  rating,
}: ProductCardProps) {
  return (
    <Link href="/" className="hover:shadow-1 rounded-1 transition-all">
      <article className="w-full h-full snap-start bg-white border border-solid border-black min-w-[min(20rem,60vw)] md:min-w-[40rem] md:h-[24rem] rounded-1 flex flex-col md:flex-row">
        <Image
          src={image}
          width={300}
          height={300}
          alt={`Image for ${name}`}
          className="w-full md:w-[unset] rounded-ss-1 rounded-se-1 md:rounded-es-1 md:rounded-se-[0]"
        />
        <div className="flex-1 flex flex-col">
          <header className="space-y-3 p-4 border-t md:border-t-0 md:border-b-0 border-b border-black border-solid flex-1">
            <h2 className="text-h2">{name}</h2>
            <div className="text-sm text-black/50 hidden text-ellipsis md:line-clamp-4 overflow-hidden  ">
              {description}
            </div>
            <div className="underline">{shop}</div>
          </header>

          <footer className="flex justify-between divide-solid divide-black divide-x md:divide-x-0">
            <div className="p-4">
              <div className="text-base border border-black border-r-[0] border-solid bg-[linear-gradient(to_left,transparent_1.5rem,_#FF90E8_1em)] py-1 pl-2 pr-5 relative before:absolute after:absolute before:top-[0] after:top-[0] before:bottom-[0] after:bottom-[0] after:right-[.0625rem] before:right-[0] before:border-l-[0] after:border-l-[0] after:w-5 before:w-5 after:border-pink-bold before:border-black after:border-r-[transparent] before:border-r-[transparent] after:border-r-[1rem] before:border-r-[1rem] before:border-[calc(0.25rem+0.5lh)] after:border-[calc(0.25rem+0.5lh)]">
                {price}
              </div>
            </div>
            <div className="p-4 flex items-center">
              <SolidStarIcon className="w-4" /> {rating}
            </div>
          </footer>
        </div>
      </article>
    </Link>
  );
}
