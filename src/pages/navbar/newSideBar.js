import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import {
	// ViewHeadline,
	ExpandLess,
	ExpandMore,
} from "@mui/icons-material";
import routing from "./navRouting";
import { useLocation, useNavigate, useParams } from "react-router";

function SidebarList({ handleId, handleClick }) {
	const navigate = useNavigate();
	const params = useParams();
	const theme = useTheme();

	const { pathname } = useLocation();
	const path1 = pathname?.split("/")?.[1];

	const path2 = pathname?.split("/")?.[2];

	// console.log("path----3", "/" + path1 + "/" + path2 + "/" + path3);
	const [open, setOpen] = React.useState(false);
	const [id, setId] = React.useState("");
	return (
		<List
			sx={{
				width: "100%",
				bgcolor: "background.paper",
				paddingTop: "0px !important",
			}}
			component='nav'
			aria-labelledby='nested-list-subheader'>
			{routing?.map((item, index) => {
				if (item?.children?.length > 0) {
					return (
						<>
							<ListItemButton
								key={index}
								onClick={() => {
									handleId(item?.id);
									navigate(item?.path);
									setOpen(!open);
									setId(item.id);
								}}
								sx={{
									color:
										`/${path1}` === item.path
											? theme.palette.common.white
											: theme.palette.common.white,
									// padding: "5px 10px",
									background:
										path1 === item.path ||
										pathname === item.path ||
										pathname === item.path + `/blogs/createblog` ||
										pathname === item.path + `/detail/${params?.id}` ||
										pathname === item.path + `/${params?.id}` ||
										pathname === item.path + `/template` ||
										pathname === item.path + `/template/${params?.id}` ||
										pathname === item.path + `/template/create-template` ||
										pathname === item.path + `/create-notification` ||
										pathname === item.path + `/update/${params?.id}` ||
										pathname === item.path + `/view/${params?.id}` ||
										pathname === item.path + `/blogs/detail/${params?.id}` ||
										pathname === item.path + `/blogs`
											? theme.palette.secondary.main
											: theme.palette.primary.main,
									borderRadius: "10px",
									marginTop: "2.5px",
									marginX: "5px",
									":hover": {
										background:
											pathname === item.path ||
											pathname === item.path + `/detail/${params?.id}` ||
											pathname === item.path + `/update/${params?.id}` ||
											pathname === item.path + `/view/${params?.id}` ||
											pathname === item.path + `/${params?.id}` ||
											pathname === item.path + `template` ||
											pathname === item.path + `/template/${params?.id}` ||
											pathname === item.path + `/template/create-template` ||
											pathname === item.path + `/create-template` ||
											pathname === item.path + `/create-notification` ||
											pathname === item.path + `/blogs/detail/${params?.id}` ||
											pathname === item.path + `/blogs` ||
											pathname === item.path + `/blogs/createblog`
												? theme.palette.secondary.main
												: theme.palette.primary.main,
										opacity: "0.8",
									},
								}}>
								<ListItemIcon
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										color:
											`/${path1}` === item.path
												? theme.palette.primary.contrastText
												: theme.palette.primary.contrastText,
										"& > svg": {
											fontSize: { xl: "1.8rem", lg: "1.5rem" },
										},
									}}>
									{item?.icon}
								</ListItemIcon>
								<ListItemText
									sx={{
										"& > span": {
											fontSize: {
												sm: "12px",
												md: "15px",
												lg: "15px",
												xl: "18px",
											},
										},
									}}>
									{item?.name}
								</ListItemText>
								{open && item?.id === id ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
							<Collapse in={open && item?.id === id}>
								<List className='urvik' sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
									{item?.children?.map((text, index) => {
										return (
											<ListItemButton
												key={index}
												onClick={() => {
													navigate(text?.path);
													handleClick();
												}}
												sx={{
													color:
														`/${path2}` === text.path
															? theme.palette.primary.contrastText
															: theme.palette.primary.contrastText,
													// padding: "5px 10px",
													background:
														pathname === text.path ||
														pathname === text.path + `/detail/${params?.id}` ||
														pathname === text.path + `/createblog` ||
														pathname === text.path + `/${params?.id}` ||
														pathname === text.path + `/create-template` ||
														pathname === text.path + `/create-notification`
															? theme.palette.secondary.main
															: theme.palette.primary.main,
													borderRadius: "10px",
													marginY: "5px",
													marginX: "5px",
													ml: 3,
													":hover": {
														background:
															pathname === text.path ||
															pathname === text.path + `/detail/${params?.id}` ||
															pathname === text.path + `/createblog`
																? theme.palette.secondary.main
																: theme.palette.primary.main,
														opacity: "0.8",
													},
												}}>
												<ListItemIcon
													sx={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														color:
															`/${path1}` === item.path
																? theme.palette.primary.contrastText
																: theme.palette.primary.contrastText,
														"& > svg": {
															fontSize: { xl: "1.8rem", lg: "1.5rem" },
														},
													}}>
													{text?.icon}
												</ListItemIcon>
												<ListItemText
													sx={{
														"& > span": {
															fontSize: {
																sm: "12px",
																md: "15px",
																lg: "15px",
																xl: "18px",
															},
														},
													}}>
													{text?.name}
												</ListItemText>
											</ListItemButton>
										);
									})}
								</List>
							</Collapse>
						</>
					);
				} else {
					return (
						<ListItemButton
							key={index}
							onClick={() => {
								handleId(item?.id);
								navigate(item?.path);
								setOpen(false);
								handleClick();
							}}
							sx={{
								color:
									`/${path1}` === item.path
										? theme.palette.primary.contrastText
										: theme.palette.primary.contrastText,
								// padding: "5px 10px",
								background:
									pathname === item.path ||
									pathname === item.path + `/reported-feeds` ||
									pathname === item.path + `/reported-feeds/${params?.id}` ||
									pathname === item.path + `/${params?.id}` ||
									pathname === item.path + `/detail/${params?.id}` ||
									pathname === item.path + `/update/${params?.id}` ||
									pathname === item.path + `/view/${params?.id}` ||
									pathname === item.path + `/create`
										? theme.palette.secondary.main
										: theme.palette.primary.main,
								borderRadius: "10px",
								margin: "5px",
								":hover": {
									background:
										pathname === item.path ||
										pathname === item.path + `/reported-feeds` ||
										pathname === item.path + `/reported-feeds/${params?.id}` ||
										pathname === item.path + `/${params?.id}` ||
										pathname === item.path + `/detail/${params?.id}` ||
										pathname === item.path + `/update/${params?.id}` ||
										pathname === item.path + `/view/${params?.id}` ||
										pathname === item.path + `/create`
											? theme.palette.secondary.main
											: theme.palette.primary.main,
									opacity: "0.8",
								},
							}}>
							<ListItemIcon
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color:
										`/${path1}` === item.path
											? theme.palette.primary.contrastText
											: theme.palette.primary.contrastText,
									"& > svg": {
										fontSize: { xl: "1.8rem", lg: "1.5rem" },
									},
								}}>
								{item?.icon}
							</ListItemIcon>
							<ListItemText
								sx={{
									"& > span": {
										fontSize: { sm: "12px", md: "15px", lg: "15px", xl: "18px" },
									},
								}}>
								{item?.name}
							</ListItemText>
						</ListItemButton>
					);
				}
			})}
		</List>
	);
}

export default SidebarList;
