import styled from 'styled-components';

const PrivacyContent = styled.div`
  margin: 0 auto;
  padding-top: 3%;
  padding-bottom: 3%;
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

const privacy = () => {
  return (
    <PrivacyContent id="privacy">
      <div className="container">
        <Heading>Privacy Policy</Heading>
        <div>
          <span><Hr/></span>
        </div>
        <div className="mt-5">
          <p>This Privacy Policy regulates the processing of your personal data. The Privacy Policy is prepared by Ice Holdings Limited, company, incorporated in the jurisdiction of the Hong Kong (hereinafter the "Company").</p>

          <p>By accessing the Company's website or any platform you give the Company consent explicitly to the processing of your personal data and the allocation of cookies files on your electronic device when you use products and services or acquire BtcEX coin (hereinafter the "Company Products").</p>

          <h5>GENERAL INFORMATION</h5>

          <p>This Privacy Policy helps you understand how your personal data is stored and processed by the Company.</p>

          <h5>PROCESSING OF PERSONAL DATA</h5>

          <p>You may use the Company Products without identifying yourself or revealing any data about yourself. Nevertheless, upon registration or your involvement into the Company Products the Company may collect your name, surname, email address, your cryptocurrency wallet physical address, identification information, taxpayer and immigration information, payroll, insurance and banking information, and other information which is required for satisfaction of verification requirements and other requirements of the applicable laws (hereinafter the "Personal Data").</p>

          <p>You may not be registered by the Company and use some of the Company Products without providing a copy of your passport and photograph.</p>

          <p>The Company may automatically collect, store and process data. This may include statistical data that does not identify you or identify you indirectly.</p>

          <p>We also may process your computer data such as your hardware and software version, operating system, computer identifiers, network information, phone number for your identification and improvements of the Company Products.</p>

          <p>We also may process log information such as IP address; identification numbers of your computers; location; your actions in our applications; your transactions; system configuration data; metadata; and other actions with the Company Products.</p>
          
          <p>The Company may process certain pieces of information when you interact with the Company's website or other Company's platforms. The Company use cookies to personalize your use of the website or other platforms and Company Products. The Company may use session cookies to track your current session activity; persistent cookies to understand usage patterns so the Company can improve its website or platforms; third party cookies to provide relevant advertising to you.</p>
          
          <p>The Company may also permit third party service providers to place cookies on the Company's website and platforms to perform analytic or marketing functions and you are notified of them and you have consented to such processing of your Personal Data. The Company does not control the use of such third-party cookies and the Company shall not be responsible for any actions or policies of such third parties.</p>
          
          <p>You may limit or turn off cookies on your device. This will limit our system performance and may cause malfunction of the Company's website and platforms. We shall be not liable to you for such malfunction</p>

          <h5>PURPOSE OF THE USE OF PERSONAL DATA AND OTHER DATA</h5>

          <p>The Company may use aggregated Personal Data and other data for research and commercial purposes. The Personal Data and other data include helping the Company improve Company’s website, platforms, and applications.</p>

          <p>The Company may use your Personal Data for commercial purposes to offer Company Products, Company's affiliates’ or third-party products and services</p>
          
          <p>The Company may use your Personal Data to contact you, answer your questions, or share information on services with you. You may refuse receiving this information by notifying us.</p>
          
          <p>The Company may reveal Personal Data about you to unaffiliated third parties: (1) if you request to transfer your Personal Data to a third party; (2) if the Personal Data shall be given to complete your transaction; (3) if the Personal Data shall be provided to comply with the law, to enforce Company's agreements, or to protect Company's, its affiliates' or users' rights, interests, and titles, property, or security; (4) if the disclosure of the Personal Data is done as part of an acquisition, transfer or sale of services or assets; (5) if the Personal Data is given to Company's agents or service providers to undertake functions on Company's behalf for analysing data, providing marketing assistance, providing service, processing payments, and other similar activities; or (6) as otherwise described in the applicable law.</p>
          
          <p>You may opt out to the processing of your Personal Data by contacting the Company via communication channels available on the Company's website or platforms.</p>
          
          <p>You shall provide the Company with accurate and actual Personal Data. The Company gives you the ability to amend your data at any time by accessing your account on Company's site and platforms. If there is no option for particular information you shall contact the Company directly via communication channels available on the Company's website or platforms.</p>
          
          <p>The Company may retain Personal Data for a certain period of time in accordance with the applicable law. The Company will hold your Personal Data for the period of time the Company thinks it will help the Company to comply with the applicable law.</p>
          
          <p>You may inquire the Company what and where your Personal Data is held by the Company and you may receive a copy of that Personal Data.</p>

          <h5>TECHNICAL AND SECURITY MEASURES</h5>

          <p>The Company has appropriate technical and security measures in place in its physical premises and in computer systems, databases, and other networks that are reasonably designed to protect from loss, misuse or alteration.</p>
          
          <p>YOU SHALL BEAR IN MIND THAT WE SHALL NOT BE RESPONSIBLE FOR ENSURING THE CONFIDENTIALITY OF NON-PUBLIC INFORMATION THAT YOU PROVIDE US.</p>
          
          <p>There is no 100% secure electronic transmission or storage in the world that is why it is natural that the Company cannot guarantee absolute security of your Personal Data. You also shall take into account your role in protecting your Personal Data. You shall notify the Company instantly of any illegal and unauthorized access to your account or a breach of security of your account. The Company may stop providing services, terminate your account and your access, or remove or edit content in its sole discretion.</p>

          <h5>LINKS TO THIRD-PARTY WEBSITES</h5>

          <p>When you use the Company's website, platforms, or Company Products, you may be directed to other websites that are beyond Company's control. The Company may also allow third-party sites or applications to link to the Company's website and platforms. The Company is not responsible for the privacy policies of third parties or any content linked to any website. The Company recommends you to read and understand their privacy policies and other legal documents of such parties and websites.</p>

          <h5>INTERNATIONAL TRANSFERS</h5>

          <p>Personal Data the Company receives may be held on Company's computers and systems in the Hong Kong Special Administrative Region, data centres in the United States and may be accessed by or given to Company's personnel working within the United States.</p>

          <p>The Company has its establishment on the Hong Kong. Information we collect from you may be processed in the Hong Kong. In particular, the Company collects and transfers to the Hong Kong personal data only: with your consent; to perform a contract with you; or to fulfill a compelling legitimate interest of the Company in a manner that does not outweigh your rights and freedoms. The Company endeavors to apply suitable safeguards to protect the privacy and security of your personal data and to use it only consistent with your relationship with the Company and the practices described in this Privacy Policy. The Company also minimizes the risk to your rights and freedoms by not collecting or storing sensitive information about you.</p>

          <h5>CHANGES TO OUR PRIVACY POLICY</h5>

          <p>The Company, in its discretion, may from time to time amend this Privacy Policy. The Company recommends you to check the Company's website and platforms frequently to see the current version of the Privacy Policy and its previous versions. The Company may inform you of the changes to the Privacy Policy using the available means of communication.</p>

        </div>
      </div>
    </PrivacyContent>
  );
};

export default privacy;
