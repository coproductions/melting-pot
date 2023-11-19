import styles from "./Legal.module.css";
import { ArrowLeft24Filled } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { useNavigate } from "react-router-dom";

export default function Legal() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/")}
        size="large"
        className={styles.closeContainer}
        appearance="subtle"
        icon={<ArrowLeft24Filled />}
      ></Button>
      <div className={styles.container}>
        <h1>
          Terms and Conditions for participating in Mingle & Munch Society
          gatherings
        </h1>
        <p>
          These terms and conditions apply to all attendees who signed up for
          any Mingle & Munch Society's in Seattle gatherings. By registering for
          the society, you agree to be bound by these terms and conditions and
          Mingle & Munch's privacy policy.
        </p>

        <h3>1. Definitions</h3>
        <p>In these terms and conditions:</p>
        <ul>
          <li>
            "We," "us," "our," and "Mingle & Munch" refer to the Mingle & Munch
            Society, based in Seattle, WA.
          </li>
          <li>
            "Gathering" means a Mingle & Munch Society dinner gathering you
            register for on the Mingle & Munch website.
          </li>
          <li>
            "Services" means services provided by the Mingle & Munch Society
            relating to its gatherings and membership.
          </li>
          <li>
            "You" and "Your" refer to individuals joining or participating in
            the Mingle & Munch society.
          </li>
          <li>
            "Vendor" means a restaurant or seller of products or services at
            your gathering.
          </li>
        </ul>

        <h3>2. Amendments to Terms and Conditions</h3>
        <p>
          Mingle & Munch reserves the right to amend these terms and conditions
          from time to time by posting changes on the Mingle & Munch website. It
          is your responsibility to check the website for changes before
          registering for a gathering. The amendments will not apply
          retroactively if you register for a gathering prior to the changes
          being posted. Your continued participation in the society after
          changes are posted indicates agreement to be bound by the amended
          terms.
        </p>

        <h3>3. Registration</h3>
        <p>
          To register as a member of the Mingle & Munch Society, you must be 18
          or older. You must provide accurate, complete, and current information
          as required in the Eventbrite registration form.
        </p>

        <h3>4. Conduct</h3>
        <p>
          You agree to act responsibly and abide by all venue rules and policies
          at Mingle & Munch Society gatherings. Offensive, discriminatory or
          unlawful conduct will not be tolerated.
        </p>

        <h3>5. Assumption of Risk</h3>
        <p>
          You assume all risks associated with participation in the Mingle &
          Munch Society. Mingle & Munch cannot be held liable for any damages,
          losses or injuries.
        </p>

        <h3>6. Refunds</h3>
        <p>
          Your $10 fee will be refunded if the cancellation occurs 24 hours
          before the event in writing via email. No refunds will be issued past
          that time.
        </p>

        <h3>7. Data Use</h3>
        <p>
          You consent to Mingle & Munch collecting and retaining any personal
          data you provide during registration or at Mingle & Munch society
          gatherings. This data will be used in accordance with Mingle & Munch's
          Privacy Policy, which will be provided upon request.
        </p>
        <p>
          Mingle & Munch may disclose limited necessary data to third-party
          vendors and partners involved in organizing and hosting gatherings.
          Mingle & Munch will not share your data for marketing purposes unless
          you explicitly opt-in to receiving communications.
        </p>
        <p>
          Mingle & Munch's data practices adhere to applicable state and federal
          privacy laws. No data will be collected, stored, or shared contrary to
          those regulations.
        </p>

        <h3>8. Copyright</h3>
        <p>
          All materials provided or created by Mingle & Munch, including text,
          graphics, logos, icons, images, and software, are the property of
          Mingle & Munch and are protected by copyright and other intellectual
          property laws.
        </p>
        <p>
          You may not reproduce, distribute, publicly display, or create
          derivative works from Mingle & Munch materials without express written
          consent. Low-resolution reproductions for personal, non-commercial use
          may be permitted.
        </p>
        <p>
          You may not reverse engineer, decompile, disassemble, or otherwise
          attempt to discover the source code or underlying structure of any
          software provided by Mingle & Munch.
        </p>
        <p>
          Mingle & Munch respects the intellectual property rights of others. If
          you have reason to believe your work has been reproduced without
          authorization, please contact us promptly.
        </p>

        <h3>9. Image Release</h3>
        <p>
          You grant the Mingle & Munch society permission to use photos and
          videos from gatherings for promotional purposes.
        </p>

        <h3>10. Gathering Suspension</h3>
        <p>
          Mingle & Munch reserves the right to cancel or suspend any gathering
          at our sole discretion without advance notice, including for:
        </p>
        <ul>
          <li>
            Maintenance, upgrades, or outages impacting our scheduling platform
            or other supporting infrastructure.
          </li>
          <li>Compliance with legal obligations or proceedings.</li>
          <li>
            Protection of Mingle & Munch, its members, partners, or the general
            public.
          </li>
        </ul>
        <p>
          You may be suspended or banned from future Mingle & Munch gatherings
          if we determine your conduct violates these terms, community
          guidelines, or puts others at risk. Suspension may occur without
          notice. Reinstatement is at Mingle & Munch's sole discretion and may
          require remedy and damages compensation.
        </p>
        <p>
          Registration fees for suspended or cancelled gatherings will be
          refunded unless cancellation was due to circumstances reasonably
          outside of Mingle & Munch's control.
        </p>

        <h3>11. Disclaimers</h3>
        <p>
          Mingle & Munch provides services on an "as-is" basis without
          warranties of any kind. We disclaim any implied warranties including
          merchantability, fitness for a particular purpose, availability,
          security, accuracy and non-infringement.
        </p>
        <p>
          While we aim to maintain robust systems and security, we make no
          guarantees of continuous access, or that data cannot be lost or
          corrupted. Mingle & Munch is not liable for any unauthorized access to
          data or systems beyond our control.
        </p>
        <p>
          Nothing in these terms limits rights under consumer protection laws.
          However, any limitations applied by law will be restricted to only
          those specific terms, without invalidating the full agreement.
        </p>
        <p>
          By attending gatherings, you accept full responsibility for any risks,
          damages, or losses resulting from participation. Mingle & Munch cannot
          control actions of individual attendees.
        </p>

        <h3>12. Governing Law</h3>
        <p>
          This Agreement (and the validity and enforceability of this Agreement)
          is governed by the law of the State of Washington without regards to
          conflicts of law. You submit to the non-exclusive jurisdiction of the
          courts exercising jurisdiction in the State of Washington.
        </p>
      </div>
    </>
  );
}
