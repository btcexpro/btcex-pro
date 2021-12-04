import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import io from 'socket.io-client';

import withTranslation from 'next-translate/withTranslation';

const FeesContent = styled.div`
  margin: 0 auto;
  padding-top: 15%;
  padding-bottom: 15%;
`; 

const Heading = styled.h2`
  text-align: center;
`;

const Hr = styled.hr`
  width: 6rem;
  height: .1rem;
  display: block;
  background-color: #908f8f;
`;

class Fee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fees: [],
      vs_currency: 'hkd'
    };
    this.handleFetchFees = this.handleFetchFees.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  componentDidMount() {
    this.handleFetchFees();
    this.socket = io();
    this.socket.on('connect', (socket) => {
      console.log("Connected with server");
    });

    this.socket.emit('currencyChange', { new_currency: 'hkd' });

    this.socket.on('update', (data) => {
        // console.log("update event", data);
        this.setState({ fees: data });
    });
  }

  handleCurrencyChange (e) {
    const { value } = e.target;
    this.setState({ vs_currency: value }, () => {
      this.handleFetchFees();
      this.socket.emit('currencyChange', { new_currency: value });
    });
  }

  async handleFetchFees () {
    const { vs_currency } = this.state;
    try {
      const res = await axios.get(`/fees?vs_currency=${vs_currency}`);
      this.setState({ fees: res.data });
    } catch (err) {
      console.error(err);
    }
  }

  render () {
    const { fees=[], vs_currency } = this.state;
    const { t } = this.props.i18n
    return (
      <FeesContent id="fee">
        <div className="container">
          <Heading>{t('common:fees.heading')}</Heading>
          <div>
            <span><Hr/></span>
          </div>
          <div className="mt-5">
            <div className="btn-group mb-1">
              <select className="custom-select bg-success text-white" onChange={(e) => this.handleCurrencyChange(e)}>
                <option value="hkd">HKD</option>
                <option value="usd">USD</option>
              </select>
            </div>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">{t('common:fees.table_heading.col_2')}</th>
                  <th scope="col" className="bg-success text-white">{t('common:fees.table_heading.col_3')} ({vs_currency.toUpperCase()})</th>
                  <th scope="col" className="bg-danger text-white">{t('common:fees.table_heading.col_4')} ({vs_currency.toUpperCase()})</th>
                </tr>
              </thead>
              <tbody>
                {
                  [].map((fee,index) => {
                    return (
                      <tr key={fee?.id||index}>
                        <td colSpan="2" scope="row" style={{ textAlign: 'left' }}>
                          <img style={{marginRight: '10px' }} src={fee?.image} width="25" alt="currency symbol" />
                          <strong>{fee?.symbol?.toUpperCase()}</strong> ({fee?.name})</td>
                        <td style={{ textAlign: 'right' }} className="text-success">{fee?.ask?.toFixed(2)}</td>
                        <td style={{ textAlign: 'right' }} className="text-danger">{fee?.bid?.toFixed(2)}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </FeesContent>
    );
  }
}

export default withTranslation(Fee);
