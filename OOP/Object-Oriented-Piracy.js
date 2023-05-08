class Ship {
	constructor(draft, crew) {
		this.draft = draft;
		this.crew = crew;
	}
}

Ship.prototype.isWorthIt = function () {
	let crewWeight = this.crew * 1.5;
	let netWeigt = this.draft - crewWeight;

	return netWeigt > 20 ? true : false;
};

// let emptyShip = new Ship(0, 0);

// console.log(emptyShip.isWorthIt());

// let aWorthyShip = new Ship(100, 20);
// console.log(aWorthyShip.isWorthIt());

// let titanic = new Ship(15, 10);
// console.log(titanic.isWorthIt());

/*-----------Building blocks-----------------------*/

class Block {
	constructor(array) {
		this.array = array;
	}

	getWidth() {
		return this.array[0];
	}

	getLength() {
		return this.array[1];
	}

	getHeight() {
		return this.array[2];
	}

	getVolume() {
		return this.array.reduce((acc, n) => acc * n);
	}

	getSurfaceArea() {
		const surfaceArea =
			2 *
			(this.array[1] * this.array[0] +
				this.array[0] * this.array[2] +
				this.array[2] * this.array[1]);
		return surfaceArea;
	}
}

// let b = new Block([2, 4, 6]); //  -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
// console.log(b.getWidth()); // -> 2

// console.log(b.getLength()); // -> 4

// console.log(b.getHeight()); // -> 6

// console.log(b.getVolume()); // -> 48

// console.log(b.getSurfaceArea()); // -> 88

// console.log(b);

/*-----------PaginationHelper-----------------------*/

class PaginationHelper {
	constructor(elements, itemsAllowed) {
		this.elements = elements;
		this.itemsAllowed = itemsAllowed;
	}

	#getPages() {
		let itemsAndPages = [];
		let allitems = [...this.elements];

		for (let i = 0; i < allitems.length; i++) {
			if (i % this.itemsAllowed == 0) {
				itemsAndPages.push(allitems.splice(0, this.itemsAllowed));
			}
			if (allitems.length < this.itemsAllowed) {
				itemsAndPages.push([...allitems]);
				break;
			}
		}

		return itemsAndPages;
	}

	pageCount() {
		return Math.ceil(this.elements.length / this.itemsAllowed);
	}
	itemCount() {
		return this.elements.length;
	}
	pageItemCount(page) {
		let itemsAndPages = this.#getPages();
		if (itemsAndPages[page] == undefined) return -1;

		const result = itemsAndPages[page].length ? itemsAndPages[page].length : -1;
		return result;
	}

	pageIndex(index) {
		let itemsAndPages = this.#getPages();

		if (index < 0) {
			return -1;
		}

		let currentItemCount = 0;
		for (let i = 0; i < itemsAndPages.length; i++) {
			currentItemCount += itemsAndPages[i].length;
			// console.log(currentItemCount);

			if (currentItemCount >= index) {
				//console.log(i);
				return i;
			}
		}

		return -1;
	}
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
//console.log(helper.pageCount()); // should == 2
//console.log(helper.itemCount()); // should == 6
// console.log(helper.pageItemCount(0)); // should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // should == 1 (zero based index)
console.log(helper.pageIndex(2)); // should == 0
console.log(helper.pageIndex(20)); // should == -1
console.log(helper.pageIndex(-10)); // should == -1

/*



*/
