import styled from 'styled-components';

import { withTranslation } from '../i18n';

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

const fee = ({ fees, t }) => {
  return (
    <FeesContent id="fee">
      <div className="container">
        <Heading>{t('heading')}</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="mt-5">
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">{t('table_heading.col_2')}</th>
                <th scope="col" className="bg-success text-white">{t('table_heading.col_3')}</th>
                <th scope="col" className="bg-danger text-white">{t('table_heading.col_4')}</th>
              </tr>
            </thead>
            <tbody>
              {
                fees.map(fee => {
                  return (
                    <tr key={fee.id}>
                      <td scope="row"><img src={fee.image} width="25" alt="currency symbol" /></td>
                      <td><strong>{fee.symbol.toUpperCase()}</strong> ({fee.name})</td>
                      <td className="text-success">{fee.ask.toFixed(3)}</td>
                      <td className="text-danger">{fee.bid.toFixed(3)}</td>
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
};

export default withTranslation('fees')(fee);
