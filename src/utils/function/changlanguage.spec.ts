const changlanguage = async (page) => {
 await page.getByText('ENG - English (อังกฤษ)').first().click();
 await page.getByRole('link', { name: 'TH - Thai (ไทย)' }).click();
 await page.goto('https://soken-cm-test.iconframework.com/datastore/archive_company/1?lang=english');
};
export default changlanguage;
