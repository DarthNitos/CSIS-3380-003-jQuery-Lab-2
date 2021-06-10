$(document).ready(() => {
	//	Target the hint box and hint
	const $hintBox = $(".hint-box");
	const $hint = $(".hint");

	//	Target all wrong answers
	const $wrongAnswer1 = $(".wrong-answer-one");
	const $wrongAnswer2 = $(".wrong-answer-two");
	const $wrongAnswer3 = $(".wrong-answer-three");

	//	Target the correct answert
	const $correctAnswer = $(".correct-answer");

	//	Make hint appear when hint box is clicked
	$hintBox.on("click", () => {
		$hint.slideToggle(800);
	});

	//	Make wrong answer fade out
	//	and frowny face image appear
	$wrongAnswer1.on("click", () => {
		$(".wrong-text-one").fadeOut("slow");

		$(".frown").show();
	});

	//	Make wrong answer fade out
	//	and frowny face image appear
	$wrongAnswer2.on("click", () => {
		$(".wrong-text-two").fadeOut("slow");

		$(".frown").show();
	});

	//	Make wrong answer fade out
	//	and frowny face image appear
	$wrongAnswer3.on("click", () => {
		$(".wrong-text-three").fadeOut("slow");

		$(".frown").show();
	});

	//	Make wrong answers fade out
	//	hide frowny face image
	//	and show smiley face image
	$correctAnswer.on("click", () => {
		$(".frown").hide();

		$(".smiley").show();

		$(".wrong-text-one").fadeOut("fast");
		$(".wrong-text-two").fadeOut("fast");
		$(".wrong-text-three").fadeOut("fast");
	})
});
