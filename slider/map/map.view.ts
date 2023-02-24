namespace $.$$ {
	export class $novorostorgi_slider_map extends $.$novorostorgi_slider_map {
		// autorun(): void {
		// 	super.autorun();
		// 	console.log("auto");
		// }

		paint() {
			// console.log("n", this.dom_node().getContext("2d"));

			setTimeout(() => {
				const ctx = this.context();

				ctx.strokeStyle = "orange";
				ctx.beginPath();
				ctx.moveTo(0, 28);
				ctx.bezierCurveTo(0, 28, 31, 7, 70, 8);
				ctx.bezierCurveTo(109, 9, 313, 99, 425, 90);
				ctx.bezierCurveTo(516, 82.5, 536, 55, 536, 55);
				ctx.stroke();
			}, 500);

			// ctx.fillStyle = "orange";
			// ctx.beginPath();
			// ctx.moveTo(0, 28);
			// // ctx.bezierCurveTo(0, 28, 31, 7, 70, 8);
			// // ctx.bezierCurveTo(109, 9, 313, 99, 425, 90);
			// // ctx.bezierCurveTo(516, 82.5, 536, 55, 536, 55);
			// ctx.fill();
		}
	}
}
