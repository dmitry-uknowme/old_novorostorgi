namespace $.$$ {
	const { px, per } = $mol_style_unit;
	$mol_style_define($novorostorgi_app, {
		background: { color: "white" },
		Container: { width: px(1200), margin: "0 auto" },
		Header: {
			padding: $mol_gap.space,
			background: { color: "white" },
			width: per(100),
		},
		// Body: { background: { color: "white" } },
	});
}
