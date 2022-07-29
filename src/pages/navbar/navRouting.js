import DashboardComp from "../Dashboard/dashboard";
import User from "../Users/Users";
import {
	Dashboard,
	PeopleAlt,
	// ViewHeadline,
	Category as CategoryIcon,
	ConnectWithoutContact,
	Groups,
	Report,
} from "@mui/icons-material";
// import Account from "../Account/Account";
import Category from "../Category/Category";
import Room from "../Rooms/Rooms";
import SocialFeed from "../Social_Feeds/Social_Feed";
import Reports from "../Report/Report";
import UsersReport from "../Report/UsersReport";
import RoomsReport from "../Report/RoomsReport";

const routing = [
	{
		id: 1,
		path: "/",
		name: "Dashboard",
		icon: <Dashboard fontSize="medium" />,
		component: <DashboardComp />,
	},
	{
		id: 2,
		path: "/category",
		name: "Category",
		icon: <CategoryIcon fontSize="medium" />,
		component: <Category />,
	},
	{
		id: 3,
		path: "/user",
		name: "Users",
		icon: <PeopleAlt fontSize="medium" />,
		component: <User />,
	},
	{
		id: 4,
		path: "/rooms",
		name: "Rooms",
		icon: <Groups fontSize="medium" />,
		component: <Room />,
	},
	{
		id: 5,
		path: "/social-feeds",
		name: "Social Feeds",
		icon: <ConnectWithoutContact fontSize="medium" />,
		component: <SocialFeed />,
	},
	{
		id: 6,
		path: "/report",
		name: "Report",
		icon: <Report fontSize="medium" />,
		component: <UsersReport />,
		children: [
			{
				id: 7,
				path: "/report",
				name: "Users",
				icon: <PeopleAlt fontSize="medium" />,
				component: <UsersReport />,
			},
			{
				id: 8,
				path: "/report/rooms",
				name: "Rooms",
				icon: <Groups fontSize="medium" />,
				component: <RoomsReport />,
			},
		],
	},
	// {
	//     id:3,
	//     path: '/account',
	//     name: 'Account',
	//     icon: <AccountBox fontSize={ window.innerWidth > 500 ? "large" : 'medium' } />,
	//     component: <Account />
	// }
];
export default routing;
