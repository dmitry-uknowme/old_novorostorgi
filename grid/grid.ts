namespace $ {
	const { px, per, rem } = $mol_style_unit;
	export abstract class $novorostorgi_grid {
		static gutter() {
			return {
				x: rem(1.5),
				y: rem(0),
			};
		}
	}
}
