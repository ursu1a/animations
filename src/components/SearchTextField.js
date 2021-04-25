import React, { Fragment, useEffect, useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end"
	},
	input: {
		flex: 1,
		paddingLeft: theme.spacing(2),
	},
}));

const duration = 700;

const defaultStyle = {
	transition: `width ${duration}ms ease`,
	width: "50px",
};

const transitionStyles = {
	entering: { width: "50px" },
	entered: { width: "50px" },
	exiting: { width: "500px" },
	exited: { width: "500px" },
};

/**
 * Search TextField with collapsing effect
 */
export default function SearchTextField() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	//current field value
	const [value, setValue] = useState("");

	//trigger expand/collapse
	const toggle = () => setOpen(!open);

	useEffect(() => {
		if (!value || value.length === 0) {
			setOpen(false);
		}
	}, [value]);

	// Input Group
	const InputGroup = () => {
		return (
			<Paper
				elevation={0}
				classes={{
					root: classes.root
				}}
			>
				<CSSTransition
					in={open}
					classNames="input-field"
					timeout={200}
					unmountOnExit
				>
					<InputBase
						value={value}
						className={classes.input}
						placeholder="Search"
						variant="outlined"
						onChange={(e) => setValue(e.target.value)}
					/>
				</CSSTransition>
				<IconButton onClick={toggle}>
					<SearchIcon />
				</IconButton>
			</Paper>
		);
	};

	return (
		// Animated field wrapper
		<Transition in={!open} timeout={duration}>
			{(state) => (
				<div
					className="wrapper-input"
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					<InputGroup />
				</div>
			)}
		</Transition>
	);
}
