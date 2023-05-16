
# Outline for pricing - UI


## Component

1. UI for cashiers

- Cashier UI contains 3 main components:

	1. List Item: 

		> where the cashier can choose the category(drink/food), then the exactly item type.

	2. Info table

		> Where the cashier can input the information of a particular item.

		> Each item type has the corresponding Info table, because each type will have different information.

		> There are 2 buttons: clear and add. [clear] is to clear the info just typed. [add] is to add the current item into Ordered List.

	3. Ordered List

		> Which is a table, displays the list of items that have been ordered items.

		> There is a button [pricing]: is to get the total price of items in the ordered list.


## Use cases

1. For cashier

	1. Choose item type

		- While choosing item type, the Info table will display corresponding to the item chosen

	2. Input information

		- while inputing infomation, the cashier can not interact with neither ListItem nor Ordered List until the casher click one of 2 buttons [clear] or [add]

		- Everytime [add] button is clicked, these steps will be run:

			1. The system check the input information if they are valid. if not, raise warning message and stop, Otherwise, go to next step.

			2. Add the current item into Ordered list, calculate its price and display in Ordered table.

		- [clear] button: is to clear the information just inputted 

	3. Pricing

		- The system will get the total price of all items in the ordered list, adding TAX. In case ordered list is empty, do nothing