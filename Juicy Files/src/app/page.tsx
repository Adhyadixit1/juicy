"use client";
import { useState, useMemo, useEffect } from "react";
import BlurredBackground from "@/components/BlurredBackground";
import ProductLogo from "@/components/ProductLogo";
import NavBar from "@/components/NavBar";
import ProductInfo from "@/components/ProductInfo";
import ScrollDownButton from "@/components/ScrollDownButton";
import SizeSelector from "@/components/SizeSelector";
import JuiceCarousel from "@/components/JuiceCarousel";
import IceCubes from "@/components/IceCubes";
import AnimatedBackground from "@/components/AnimatedBackground";
import dynamic from "next/dynamic";

// Optimize loading with specific settings to improve performance
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false,
  loading: () => (
    <div className="h-screen max-h-[1100px] overflow-hidden relative"></div>
  ),
});
// Define a type for the juice names to properly type-check
type JuiceName = keyof typeof canThemeMap;

// Can color and text color map
const canThemeMap = {
  "Lemon Ginger": {
    mainBgColor: "#82AF38",
    blurColor: "#E5F985",
    textColor: "white",
    accentColor: "rgba(255, 255, 255, 0.9)",
    buttonBgColor: "white",
    buttonTextColor: "#82AF38",
  },
  "Blueberry Açai": {
    mainBgColor: "#385dd2",
    blurColor: "#B6B6F9",
    textColor: "white",
    accentColor: "rgba(255, 255, 255, 0.9)",
    buttonBgColor: "white",
    buttonTextColor: "#385dd2",
  },
  "Mango Burst": {
    mainBgColor: "#FFA500",
    blurColor: "#FFF3B6",
    textColor: "#222",
    accentColor: "rgba(0,0,0,0.7)",
    buttonBgColor: "white",
    buttonTextColor: "#FFA500",
  },
  "Raspberry Rosé": {
    mainBgColor: "#FF6B81",
    blurColor: "#FFD6DE",
    textColor: "white",
    accentColor: "rgba(255,255,255,0.9)",
    buttonBgColor: "white",
    buttonTextColor: "#FF6B81",
  },
};

// Create juice data for pre-rendering with unique descriptions for each flavor
const juiceData = {
  "Lemon Ginger": {
    title: "Lemon Ginger",
    description:
      "A zesty and refreshing blend with a spicy kick. Our Lemon Ginger juice combines the citrusy brightness of fresh lemons with the warming properties of ginger.",
  },
  "Blueberry Açai": {
    title: "Blueberry Açai",
    description:
      "A nutrient-packed superfood blend. Our Blueberry Açai juice brings together antioxidant-rich berries with the exotic taste of açai for a delicious health boost.",
  },
  "Mango Burst": {
    title: "Mango Burst",
    description:
      "A tropical explosion of sweetness. Our Mango Burst juice captures the sun-ripened goodness of premium mangoes for a taste of paradise in every sip.",
  },
  "Raspberry Rosé": {
    title: "Raspberry Rosé",
    description:
      "An elegant and sophisticated blend. Our Raspberry Rosé juice combines the delicate sweetness of raspberries with subtle floral notes for a refined exp.",
  },
};

const content = {
  nav: {
    logo: "Juicy",
    items: [
      { label: "Flavour" },
      { label: "Drinks" },
      { label: "Fruit" },
      { label: "About" },
      { label: "Contact" },
    ],
    cartCount: 2,
  },
  logo: {
    text: "JUICY",
  },
  sizes: [
    { size: "355", unit: "ML", selected: true },
    { size: "100", unit: "ML" },
    { size: "125", unit: "ML" },
  ],
  product: {
    title: "Cheeky lime",
    description:
      "Discover a world of vibrant flavors with our premium juice selection. At Fresh & Juicy, we believe in the power of nature's finest ingredients to bring you",
    buttonText: "See More",
  },
  scroll: {
    firstLine: "Get",
    secondLine: "This",
  },
};

export default function Home() {
  // Default to Lemon Ginger
  const [theme, setTheme] = useState(canThemeMap["Lemon Ginger"]);
  const [productTitle, setProductTitle] = useState("Lemon Ginger");
  const [, setProductDesc] = useState(content.product.description);
  const [isMobile, setIsMobile] = useState(false);

  const containerWidth = 1220;

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Set initial value
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Memoize the props for IceCubes to ensure stable references
  const iceCubesProps = useMemo(
    () => ({
      theme,
      containerWidth,
      cubeCount: isMobile ? 6 : 8, // Reduce number of elements on mobile
      leafCount: isMobile ? 10 : 14, // Reduce number of elements on mobile
    }),
    [theme, containerWidth, isMobile]
  );

  // Update body background color when theme changes, with improved timing
  useEffect(() => {
    // Apply transition without delay first
    document.body.style.transition = "all 0.6s ease-in-out 0.3s";

    document.body.style.backgroundColor = theme.mainBgColor;
  }, [theme.mainBgColor]);

  // Callback for JuiceCarousel with debounce to prevent rapid changes
  const handleCanChange = (canName: string) => {
    // Type check to ensure canName is a valid key in canThemeMap
    if (Object.keys(canThemeMap).includes(canName)) {
      const typedCanName = canName as JuiceName;
      setTheme(canThemeMap[typedCanName]);
      setProductTitle(canName);
      setProductDesc(juiceData[typedCanName].description);
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto max-h-screen sm:max-h-900px h-[100dvh] shadow-2xl select-none border-x-1 border-white/30">
      <IceCubes {...iceCubesProps} />
      <NavBar
        logo={content.nav.logo}
        navItems={content.nav.items}
        cartItemCount={content.nav.cartCount}
        textColor="white"
        themeColor={theme.mainBgColor} // Pass theme color to NavBar
        buttonTextColor={theme.buttonTextColor} // Pass button text color to NavBar
      />
      <WaterWave
        dropRadius={isMobile ? 8 : 10}
        perturbance={isMobile ? 0.006 : 0.01}
        imageUrl="/assets/images/drop.png"
        resolution={isMobile ? 700 : 1900}

      >
        {() => (
          <div className="max-h-screen sm:max-h-900px h-[100dvh] overflow-hidden w-full relative">
            {/* Background as a separate component that handles its own animation */}
            <AnimatedBackground
              backgroundColor={theme.mainBgColor}
              duration={1}
            />

            {/* Blurred background */}
            <div
              className="absolute top-0 left-0 w-full h-full z-[0]!  bg-black/5"
              style={{ backdropFilter: "blur(0px)" }}
            />

            <div
              className={`max-w-[1440px] ${
                isMobile ? "px-4" : "pr-5 pl-[70px]"
              } h-full w-fzll max-h-[1080px] m-auto relative`}
            >
              {/* Blurred background */}
              <BlurredBackground color={theme.blurColor} />

              {/* ProductLogo always fixed as "JUICY" and always white */}
              <ProductLogo
                isMobile={isMobile}
                text="JUICY"
                color="white"
                className="theme-text "
              />

              {/* Juice Carousel with can change callback */}
              <div
                className={`${
                  isMobile ? "relative" : "absolute"
                }  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full z-50`}
              >
                <JuiceCarousel 
                  onCanChange={handleCanChange} 
                  enableScrollNavigation={true}
                />
              </div>

              <SizeSelector
                sizes={content.sizes}
                selectedColor={theme.buttonBgColor}
                unselectedColor={theme.mainBgColor}
                textColor={theme.mainBgColor}
                selectedTextColor="white"
              />

              <ProductInfo
                title={productTitle}
                juiceData={juiceData}
                buttonText={content.product.buttonText}
                buttonBgColor={theme.buttonBgColor}
                buttonTextColor={theme.buttonTextColor}
              />

              <ScrollDownButton
                firstLine={content.scroll.firstLine}
                secondLine={content.scroll.secondLine}
                textColor="white"
                isMobile={isMobile}
                themeColor={theme.mainBgColor}  
              />
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
}
