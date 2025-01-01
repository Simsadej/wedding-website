import React, {useState} from 'react';
import {Button} from "../Button";
import '../../styles/ConfirmAttendance.css';
import * as Yup from  'yup'
import {expectedError} from "@babel/core/lib/errors/rewrite-stack-trace";

function ConfirmAttendance(builder) {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        isAttending: '',
        plusOne: false,
        numPlusOne: 0
    });
    const [error, setError] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validationSchema = Yup.object({
        firstname: Yup.string().required('Your Firstname is required'),
        lastname: Yup.string().required('Your Lastname is required'),
        email: Yup.string().required('Your email cannot be empty').email(),
        isAttending: Yup.string().required('Please select either \'Yes\' or \'No\''),
        plusOne: Yup.bool().notRequired(),
        numPlusOne: Yup.number()
            .transform((value) => (isNaN(value) ? undefined : value))
            .when('plusOne', {
                is: true,
                then: (schema) => schema
                    .required('Your number of plus one(s) is required')
                    .typeError('Must be a valid number')
                    .positive('Must be a positive number')
                    .integer('Must be a whole number')
                    .max(5, 'Maximum of 5 plus ones allowed')
                    .test(
                        'is-reasonable',
                        'Please enter a reasonable number of guests',
                        (value) => value <= 5
                    ),
                otherwise: (schema) => schema
                    .nullable()
                    .transform((value) => null)
            }),
    });


    const checkGuestExists = async (email) => {

        try {
            const response = await fetch("/api/check-guest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            console.log(data);
            if (data.exists) {
                setError((error) => ({
                    error,
                    email: data.errors.message,
                }));
            } else {
                setError((error) => ({
                    error,
                    email: '',
                }));
            }
            return data.exists;
        } catch (error) {
            setError((error) => ({
                error,
                email: 'Sorry we\'re unable to verify your email',
            }));
            return false;
        }
    };

    const handleChange = (e) => {
        const name  = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === "email") {
            checkGuestExists(value);
        }

        setError({...error, [name]: ''});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // reset state at the start
            setError({});
            setIsSubmitted(false);

            // check email exists
            const emailExists  = await checkGuestExists(formData.email);
            if (emailExists) {
                setError({email: 'You have already confirmed your attendance'})
                return;
            }


             await validationSchema.validate(formData,{abortEarly: false});

            const response = await fetch('/api/add-guest', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),

            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to add guest")
            }
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);

        } catch (e) {
            const newError = {};

            e.inner.forEach((err) => {
                newError[err.path] = err.message;
            });
            setError(newError);

            setIsSubmitted(false);
        }
    };

    return (
        <>
            <div className='container'>
              <main>
                  <h1 className='text-center text-lg-center'>Will you be there or will you miss it? </h1>

                  <div>
                      <p className='text-center'>
                          To confirm your attendance to the wedding, enter your first and lastname in the form below.
                          Confirm your attendance by either selecting 'Yes' or 'No'. Finally please let us know if you will
                          be bringing along any plus ones and how many and click on the 'submit' button.
                          <br/>
                          We can't wait to for you to join us on our special day!
                      </p>
                      <p className='text-center text-md-center text-lg-center'>Please RSVP by Feb 28th 2025</p>
                  </div>

                  <form className='row mb-3 g-3 justify-content-center align-items-center' onSubmit={handleSubmit}>
                      <div className='col-xs-12 col-md-6'>
                          <div className='form-group'>
                              <label className='form-label' htmlFor='firstname'>Firstname</label>
                              <input
                                  className='form-control'
                                  name="firstname"
                                  placeholder='Firstname'
                                  id='firstName'
                                  value={formData.firstname}
                                  onChange={handleChange}/>
                              {error.firstname && <span>{error.firstname}</span>}
                          </div>
                      </div>
                      <div className='col-xs-12 col-md-6'>
                          <div className='form-group'>
                              <label className='form-label' htmlFor='lastName'>Lastname</label>
                              <input
                                  className='form-control'
                                  name="lastname"
                                  placeholder='Lastname'
                                  id='lastName'
                                  value={formData.lastname}
                                  onChange={handleChange}
                              />
                              {error.lastname && <span>{error.lastname}</span>}
                          </div>
                      </div>


                      <div className='mb-3'>
                          <div className='form-group col-sm col-lg-6 col-xl-6 g-xl-4'>
                              <label>
                                  Email
                              </label>
                              <input
                                  className='form-control'
                                  name='email'
                                  placeholder='Email'
                                  value={formData.email  }
                                  type='text'
                                  onChange={handleChange}
                              />
                              { error.email  && <span>{error.email}</span>}
                          </div>
                      </div>

                      <div className='mb-3'>
                          <div className='col-sm form-group'>
                              <label>Are you attending?</label>
                          </div>

                          <div className='form-check mt-3'>
                              <label className='form-check-label' htmlFor='isAttending'>
                                  Yes
                              </label>
                              <input
                                  className='form-check-input'
                                  name='isAttending'
                                  type='radio'
                                  id='attendingYes'
                                  value={1}
                                  checked={formData.isAttending === '1'}
                                  onChange={handleChange}
                              />

                          </div>

                          <div className='form-check'>
                              <label className='form-check-label' htmlFor='isAttending'>
                                  No
                              </label>
                              <input
                                  className='form-check-input'
                                  name='isAttending'
                                  value={0}
                                  type='radio'
                                  checked={formData.isAttending === '0'}
                                  onChange={handleChange}/>

                          </div>
                          {error.isAttending && <span>{error.isAttending}</span>}

                      </div>

                      <div className='form-check'>
                          <label className='form-check-label' htmlFor=''>
                              Plus one(s)?
                          </label>
                          <input
                              className='form-check-input'
                              name='plusOne'
                              value={formData.plusOne}
                              type='checkbox'
                              onChange={handleChange}
                          />
                      </div>

                      <div className='mb-3'>
                          {formData.plusOne && <div className='form-group col-sm col-lg-6 col-xl-6 g-xl-4'>
                              <label>
                                  How many plus ones will you bring?
                              </label>
                              <input
                                  className='form-control'
                                  name='numPlusOne'
                                  value={formData.numPlusOne}
                                  type='number'
                                  onChange={handleChange}
                              />
                              {error.numPlusOne && <span>{error.numPlusOne}</span>}
                          </div>}
                      </div>


                      <div className='button'>
                          <Button

                              children='Submit'
                              size='btn-small'
                              type='submit'
                              style='btn-outline'
                              onClick={handleSubmit}/>

                      </div>

                  </form>

                  {isSubmitted && (
                      <div className="form-submission alert alert-success text center mx-3">
                          Your details have been submitted!
                      </div>
                  )}
              </main>

            </div>


        </>
    )
}

export default ConfirmAttendance;