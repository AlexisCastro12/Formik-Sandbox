import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const Basic = () => (
  <div>
    <h1>Purchase Data</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        picked: ""
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <h3>Owner Details</h3>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <Field id="firstName" name="firstName" placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
        </div>
        <div>
          <label htmlFor="dateBirth">Date of Birth: </label>
          <Field id="dateBirth" name="dateBirth" placeholder="MM" /> /{" "}
          <Field id="lastName" name="lastName" placeholder="DD" /> /{" "}
          <Field id="lastName" name="lastName" placeholder="YYYY" />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <Field name="color" as="select">
            <option value="US">United States</option>
            <option value="MX">Mexico</option>
            <option value="CAN">Canada</option>
          </Field>
        </div>
        <div>
          <label htmlFor="City">City: </label>
          <Field id="City" name="City" />
        </div>
        <div>
          <label htmlFor="Address">Address: </label>
          <Field id="Address" name="Address" placeholder="123 Example Street" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <Field
            id="phoneNumber"
            name="phoneNumber"
            placeholder="+1 234567890"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
        </div>
        <h3>Credit Card Details</h3>
        <div>
          <label htmlFor="cardNumber">Card Number: </label>
          <Field
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div>
          <label htmlFor="CVV">CVV: </label>
          <Field id="CVV" name="CVV" placeholder="***" />
        </div>
        <div>
          <label htmlFor="expDate">Expiration Date: </label>
          <Field id="expDate" name="expDate" placeholder="MM/YY" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<Basic />, document.getElementById("root"));
