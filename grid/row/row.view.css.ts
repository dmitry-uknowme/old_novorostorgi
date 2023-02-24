namespace $.$$ {
	const { px, per, rem } = $mol_style_unit;
	const { calc } = $mol_style_func;
	$mol_style_define($novorostorgi_grid_row, {
		display: "flex",
		flexWrap: "wrap",
		marginTop: rem(calc(-1 * $novorostorgi_grid.gutter().y).value),
		marginRight: rem(calc(-0.5 * $novorostorgi_grid.gutter().x).value),
		marginLeft: rem(calc(-0.5 * $novorostorgi_grid.gutter().x).value),
		">": {
			$novorostorgi_grid_col: {
				flexShrink: "0",
				width: per(100),
				maxWidth: per(100),
				paddingRight: rem(
					calc($novorostorgi_grid.gutter().x * 0.5).value
				),
				paddingLeft: rem(
					calc($novorostorgi_grid.gutter().x * 0.5).value
				),
				marginTop: $novorostorgi_grid.gutter().y,
			},
		},
	});
}
