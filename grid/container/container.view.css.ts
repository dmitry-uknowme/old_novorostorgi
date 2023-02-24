namespace $.$$ {
	const { px, per, rem } = $mol_style_unit;
	const { calc } = $mol_style_func;
	$mol_style_define($novorostorgi_grid_container, {
		width: per(100),
		paddingRight: rem(calc($novorostorgi_grid.gutter().x * 0.5).value),
		paddingLeft: rem(calc($novorostorgi_grid.gutter().x * 0.5).value),
		marginRight: "auto",
		marginLeft: "auto",
		"@media": {
			"(min-width: 1400px)": {
				maxWidth: px(1320),
			},
			"(min-width: 1200px)": {
				maxWidth: px(1140),
			},
			"(min-width: 992px)": {
				maxWidth: px(960),
			},
			"(min-width: 768px)": {
				maxWidth: px(720),
			},
			"(min-width: 576px)": {
				maxWidth: px(540),
			},
		},
	});
}
