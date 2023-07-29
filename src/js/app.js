const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "http://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "http://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
const btn = document.querySelector("#delete-btn");
btn.addEventListener("click", (e) => {
	btn.remove();
});

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:
// https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8
// ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით) , ასევე  დავამატოთ alt ატრიბუტიც. თუ საჭირო იქნება დაამატეთ კლასიც (ჯავასკრიპტიდან) და მიანიჭეთ სტილები css-დან (სქროლი არ უნდა გვქონდეს).
const section = document.querySelector(".edit-section");
const img = document.createElement("img");
img.setAttribute(
	"src",
	"https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8"
);
img.setAttribute("alt", "street");
img.classList.add("img");
section.append(img);

// img.src =
// 	"https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8";

// 3. html-ში შექმენით <div id="characters-list"></div>

const list = document.querySelector("#charachters-list");
// 4.
//     4.1 ლექციაზე დაწერილ ფაილში => app.js ში ნახეთ characters  მასივი რომელიც შედგება 4 ობიექტისგან.
//     4.2. characters   მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით).
//     4.3 ეს html სტრინგი ჩასვით ამ დივში: <div id="characters-list"></div>.
//     4.4 დიზაინში  character card ზე არის სურათი, house და სრული სახელი, თქვენ უნდა ჩასვათ image, house და first_name + last_name რომელიც არის მასივის ობიექტ ელემენტში.
function renderCards() {
	const html = characters
		.map((el) => {
			return `<div class="char-card">
				<div class="char-info">
					<h4 class="char-name">${el.first_name} ${el.last_name}</h4>
					<h5 class="house">house: ${el.house}</h5>
					<h6 class="actor-name">${el.actor}</h6>
					<div class="btns">
						<button class="show-info">show info</button>
						<button class="delete-card">delete card</button>
					</div>
				</div>
				<img src="${el.image}" alt="${el.actor}" />
			</div>`;
		})
		.join("");

	// console.log(html);

	list.innerHTML = html;

	// 5.
	const showInfoBtns = document.querySelectorAll(".show-info");
	const deleteBtns = document.querySelectorAll(".delete-card");

	showInfoBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const card = btn.closest(".char-card");
			card.querySelector(".actor-name").classList.toggle("active");
			const h6 = btn.parentElement.previousElementSibling;
			// console.log(h6);
		});
	});

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			const card = btn.closest(".char-card");
			card.remove();
		});
	});
}

renderCards();
// 5.  (optional) #4 დავალებაში შექმნილ character card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  character card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ მსახიობის ინფო (actor)
// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების (append)-ის შემდეგ
