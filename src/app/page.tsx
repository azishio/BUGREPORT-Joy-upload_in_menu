"use client";

import { UploadFile } from "@mui/icons-material";
import {
	Dropdown,
	IconButton,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	Stack,
	Typography,
} from "@mui/joy";

export default function Home() {
	return (
		<main>
			<Stack direction={"row"}>
				<Typography>Plain Input:</Typography>
				<Input
					variant={"plain"}
					type={"file"}
					onChange={(e) => console.log("plainInput", e.currentTarget.files)}
				/>
			</Stack>

			<Stack direction={"row"}>
				<Typography>Button Input:</Typography>
				<IconButton component={"label"}>
					<Input
						type={"file"}
						onChange={(e) => console.log("buttonInput", e.currentTarget.files)}
						sx={{ display: "none" }}
					/>
					<UploadFile />
				</IconButton>
			</Stack>

			<Stack direction={"row"}>
				<Typography>Dropdown Input:</Typography>
				<Dropdown>
					<MenuButton slots={{ root: IconButton }}>
						<UploadFile />
					</MenuButton>
					<Menu>
						<MenuItem component={"label"}>
							<Input
								type={"file"}
								onChange={(e) =>
									console.log("menuInput", e.currentTarget.files)
								}
								sx={{ display: "none" }}
							/>
							upload
						</MenuItem>
					</Menu>
				</Dropdown>
			</Stack>
		</main>
	);
}
