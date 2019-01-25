var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {
	
	it('Test1: Should be able to submit a successful submission via contact us form', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('joe','Blogs', 'contactDetail@m.com','contactDetail.body');
	});

	it('Test2: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('Mike','Woods', 'mike_woods@mail.com',null);
	});

	it('Test3: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm('Sarah', null,'sarah_woods@mail.com', null);
	});

	it('Test4: Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
		ContactUs_Page.submitAllInformationViaContactUsForm(null, 'Jomes','sarah_Jomes@mail.com', null);
	});
});