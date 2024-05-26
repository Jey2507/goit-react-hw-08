import css from "../HomePage/HomePage.module.css"

export default function HomePage() {
  return (
    <>
      <h1 className={css.title}>Welcome to our website! Here you can conveniently manage your contacts.<br /> Our service offers the following features:</h1>
      <ul className={css.list}>
        <li>
          <p>1. Add Contacts: Easily add new contacts using a simple and intuitive form. Enter the name and phone number, and the new contact will be saved to your list.</p>
        </li>
        <li>
          <p>2. Filter Contacts: Quickly find the contact you need with the filtering function. Enter a name or phone number to see only those contacts that match your query.</p>
        </li>
        <li>
          <p>3. User-Friendly Interface: Our website has a simple and clear interface that allows you to easily navigate and efficiently manage your contacts.</p>
        </li>
        <li>
          <p>4. Data Security: We care about the security of your data, so we use a reliable authorization and information protection system.</p>
        </li>
      </ul>
      <h2 className={css.titleTwo}>Log In to Access All Features!</h2>
      <div className={css.container}>
        <p className={css.descr}>If you haven't logged into your account yet, please do so now to gain full access to all the features of our website. Only authorized users can add, edit, and delete contacts.</p>
        <p className={css.descr}>Click on the "Login" button at the top right corner of the page and enter your credentials. If you don't have an account yet, you can register by filling out a simple registration form.</p>
        <p className={css.descr}>Thank you for choosing our service to manage your contacts!</p>
      </div>
      
    </>
  );
}
