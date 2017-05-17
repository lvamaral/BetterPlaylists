// dropdown function that toggles 'hidden' class to the gear-dropdown ul
const toggleDropdown = () => {
	$('#dropdown').toggleClass('hidden');
};

// Add click listener to gear icon which invokes toggle function
$(() => $('#dropdown-btn').on('click', toggleDropdown));
