import imageOneDesktop from "./assets/illustrations/walkthroug-1-desktop.png";
import imageOneResponsive from "./assets/illustrations/walkthroug-1-responsive.png";
import iconOne from "./assets/icons/walkthrough-1.svg";
import imageTwoDesktop from "./assets/illustrations/walkthroug-2-desktop.png";
import imageTwoResponsive from "./assets/illustrations/walkthroug-2-responsive.png";
import iconTwo from "./assets/icons/walkthrough-2.svg";
import imageThreeDesktop from "./assets/illustrations/walkthroug-3-desktop.png";
import imageThreeResponsive from "./assets/illustrations/walkthroug-3-responsive.png";
import iconThree from "./assets/icons/walkthrough-3.svg";

export const walkthroughCardsData = [
	{
		title : "1—BROWSE",
        description: "Browse our tech catalog with more than 20 top tech products",
        imageDesktop: imageOneDesktop,
		imageResponsive: imageOneResponsive,
        icon: iconOne,
		styles: {
			transform: "rotate(-3deg) translateX(100px)",
		}
	},
	{
		title : "2—CHOOSE",
        description: "Exchange your hard earned AeroPoints for the item you want",
        imageDesktop: imageTwoDesktop,
        imageResponsive: imageTwoResponsive,
        icon: iconTwo,
		styles: {
			transform: "translateY(-40px)",
		}
	},
	{
		title : "3—ENJOY!",
        description: "All done, you can relax! We’ll take care of delivery of your tech item!",
        imageDesktop: imageThreeDesktop,
        imageResponsive: imageThreeResponsive,
        icon: iconThree,
		styles: {
			transform: "rotate(3deg) translateX(-100px)",
		}
	}
];