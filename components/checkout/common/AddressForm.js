import React, { Component } from 'react';
import PropTypes from 'prop-types';
import commerce from '../../../lib/commerce';
import Dropdown from '../../common/atoms/Dropdown';

export default class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subdivisions: {},
    };

    this.getRegions = this.getRegions.bind(this);
  }

  componentDidMount() {
    this.getRegions(this.props.country);
  }

  componentDidUpdate(prevProps, prevState) {
    const hasDeliveryCountryChanged = prevProps.country !== this.props.country;

    // refresh list of regions when delivery country has changed
    if (hasDeliveryCountryChanged) {
      this.getRegions(this.props.country);
    }
  }

  /**
   * Fetch available shipping regions for the chosen country
   *
   * @param {string} country
   */
   getRegions(country) {
    commerce.services.localeListSubdivisions(country).then(resp => {
      this.setState({
        subdivisions: resp.subdivisions
      })
    }).catch(error => console.log(error))
  }


  render() {
    const {
      type,
      countries,
      country,
      region,
      name,
      townCity,
      street,
      street2,
      postalZipCode,
    } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-12 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Nombre completo*
              </p>
              <input required name={`${type}[name]`} autoComplete="name" value={name} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                País*
              </p>
              <Dropdown
                required
                name={`${type}[country]`}
                placeholder="Elige un país"
                value={country}
              >
                {
                  Object.entries(countries).map(([code, name]) => (
                    <option value={code} key={code}>
                      { name }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">Ciudad*</p>
              <input required name={`${type}[town_city]`} autoComplete="address-level2" value={townCity} className="rounded-0 w-100" />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Dirección 1*
              </p>
              <input
                required
                autoComplete="street-address"
                name={`${type}[street]`}
                value={street}
                className="rounded-0 w-100"
                placeholder="House number, steet address, etc."
              />
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Dirección 2 (opcional)
              </p>
              <input
                name={`${type}[street_2]`}
                value={street2}
                className="rounded-0 w-100"
                placeholder="Apartment, suite number, etc."
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Estado/provincia/región*
              </p>
              <Dropdown
                required
                name={`${type}[region]`}
                value={region}
                placeholder="Elige una provincia"
              >
                {
                  Object.entries(this.state.subdivisions).map(([code, name]) => (
                    <option key={code} value={code}>
                    { name }
                    </option>
                  ))
                }
              </Dropdown>
            </label>
          </div>
          <div className="col-12 col-sm-6 mb-3">
            <label className="w-100">
              <p className="mb-1 font-size-caption font-color-light">
                Código postal*
              </p>
              <input
                required
                autoComplete="postal-code"
                name={`${type}[postal_zip_code]`}
                value={postalZipCode}
                className="rounded-0 w-100"
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}

AddressForm.propTypes = {
  type: PropTypes.string,
  countries: PropTypes.any,
  country: PropTypes.string,
  region: PropTypes.string,
  name: PropTypes.string,
  townCity: PropTypes.string,
  street: PropTypes.string,
  street2: PropTypes.string,
  postalZipCode: PropTypes.string,
}
