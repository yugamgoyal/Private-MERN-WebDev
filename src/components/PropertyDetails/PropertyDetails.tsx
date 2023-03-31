import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BlackIconSetArrowDownSLine } from './BlackIconSetArrowDownSLine/BlackIconSetArrowDownSLine';
import { BlackIconSetArrowLeftSLine } from './BlackIconSetArrowLeftSLine/BlackIconSetArrowLeftSLine';
import { BlackIconSetDirectionLine } from './BlackIconSetDirectionLine/BlackIconSetDirectionLine';
import { BlackIconSetDonutChartLine } from './BlackIconSetDonutChartLine/BlackIconSetDonutChartLine';
import { BlackIconSetHistoryLine } from './BlackIconSetHistoryLine/BlackIconSetHistoryLine';
import { BlackIconSetShareLine } from './BlackIconSetShareLine/BlackIconSetShareLine';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { LaBedIcon } from './LaBedIcon.js';
import { Path489Icon } from './Path489Icon.js';
import { Path2979Icon } from './Path2979Icon.js';
import { Path3859Icon } from './Path3859Icon.js';
import { Path3903Icon2 } from './Path3903Icon2.js';
import { Path3903Icon3 } from './Path3903Icon3.js';
import { Path3903Icon } from './Path3903Icon.js';
import { Path4106Icon } from './Path4106Icon.js';
import { Path4294Icon } from './Path4294Icon.js';
import { PhBathtubIcon } from './PhBathtubIcon.js';
import classes from './PropertyDetails.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon } from './VectorIcon.js';
import { VuesaxLinearAdd } from './VuesaxLinearAdd/VuesaxLinearAdd';
import { VuesaxLinearAddIcon } from './VuesaxLinearAddIcon.js';
import { VuesaxLinearBuilding4 } from './VuesaxLinearBuilding4/VuesaxLinearBuilding4';
import { VuesaxLinearBuilding4Icon } from './VuesaxLinearBuilding4Icon.js';
import { VuesaxLinearCalendar } from './VuesaxLinearCalendar/VuesaxLinearCalendar';
import { VuesaxLinearCalendarIcon } from './VuesaxLinearCalendarIcon.js';
import { VuesaxLinearCar } from './VuesaxLinearCar/VuesaxLinearCar';
import { VuesaxLinearCarIcon } from './VuesaxLinearCarIcon.js';
import { VuesaxLinearFatrows } from './VuesaxLinearFatrows/VuesaxLinearFatrows';
import { VuesaxLinearFatrowsIcon } from './VuesaxLinearFatrowsIcon.js';
import { VuesaxLinearFormatSquare } from './VuesaxLinearFormatSquare/VuesaxLinearFormatSquare';
import { VuesaxLinearFormatSquareIcon } from './VuesaxLinearFormatSquareIcon.js';
import { VuesaxLinearHome2 } from './VuesaxLinearHome2/VuesaxLinearHome2';
import { VuesaxLinearHome2Icon } from './VuesaxLinearHome2Icon.js';
import { VuesaxLinearKey } from './VuesaxLinearKey/VuesaxLinearKey';
import { VuesaxLinearKeyIcon } from './VuesaxLinearKeyIcon.js';
import { VuesaxLinearLocationTick } from './VuesaxLinearLocationTick/VuesaxLinearLocationTick';
import { VuesaxLinearLocationTickIcon } from './VuesaxLinearLocationTickIcon.js';
import { VuesaxLinearLogout } from './VuesaxLinearLogout/VuesaxLinearLogout';
import { VuesaxLinearLogoutIcon } from './VuesaxLinearLogoutIcon.js';
import { VuesaxLinearMap } from './VuesaxLinearMap/VuesaxLinearMap';
import { VuesaxLinearMapIcon } from './VuesaxLinearMapIcon.js';
import { VuesaxLinearMessageQuestion } from './VuesaxLinearMessageQuestion/VuesaxLinearMessageQuestion';
import { VuesaxLinearMessageQuestionIco } from './VuesaxLinearMessageQuestionIco.js';
import { VuesaxLinearNoteFavorite } from './VuesaxLinearNoteFavorite/VuesaxLinearNoteFavorite';
import { VuesaxLinearNoteFavoriteIcon } from './VuesaxLinearNoteFavoriteIcon.js';
import { VuesaxLinearNotification } from './VuesaxLinearNotification/VuesaxLinearNotification';
import { VuesaxLinearNotificationIcon2 } from './VuesaxLinearNotificationIcon2.js';
import { VuesaxLinearNotificationIcon } from './VuesaxLinearNotificationIcon.js';
import { VuesaxLinearProfile2user } from './VuesaxLinearProfile2user/VuesaxLinearProfile2user';
import { VuesaxLinearProfile2userIcon } from './VuesaxLinearProfile2userIcon.js';
import { VuesaxLinearSearchNormal } from './VuesaxLinearSearchNormal/VuesaxLinearSearchNormal';
import { VuesaxLinearSearchNormalIcon } from './VuesaxLinearSearchNormalIcon.js';
import { VuesaxLinearSearchStatus } from './VuesaxLinearSearchStatus/VuesaxLinearSearchStatus';
import { VuesaxLinearSearchStatusIcon } from './VuesaxLinearSearchStatusIcon.js';
import { VuesaxLinearSetting2 } from './VuesaxLinearSetting2/VuesaxLinearSetting2';
import { VuesaxLinearSetting2Icon } from './VuesaxLinearSetting2Icon.js';
import { VuesaxLinearShoppingCart } from './VuesaxLinearShoppingCart/VuesaxLinearShoppingCart';
import { VuesaxLinearSms } from './VuesaxLinearSms/VuesaxLinearSms';
import { VuesaxLinearSmsIcon } from './VuesaxLinearSmsIcon.js';
import { VuesaxLinearSpeedometer } from './VuesaxLinearSpeedometer/VuesaxLinearSpeedometer';
import { VuesaxLinearSpeedometerIcon } from './VuesaxLinearSpeedometerIcon.js';
import { VuesaxLinearUserCirlceAdd } from './VuesaxLinearUserCirlceAdd/VuesaxLinearUserCirlceAdd';
import { VuesaxLinearUserCirlceAddIcon } from './VuesaxLinearUserCirlceAddIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:204 */
export const PropertyDetails: FC<Props> = memo(function PropertyDetails(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <VuesaxLinearUserCirlceAdd
        className={classes.vuesaxLinearUserCirlceAdd}
        swap={{
          vuesaxLinearUserCirlceAdd: <VuesaxLinearUserCirlceAddIcon className={classes.icon} />,
        }}
      />
      <div className={classes.inviteEarn}>Invite &amp; Earn</div>
      <div className={classes.rectangle2455}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon31} />
      </div>
      <div className={classes.vector2}>
        <VectorIcon2 className={classes.icon32} />
      </div>
      <div className={classes.vector3}>
        <VectorIcon3 className={classes.icon33} />
      </div>
      <div className={classes.vector4}>
        <VectorIcon4 className={classes.icon34} />
      </div>
      <div className={classes.rectangle24552}></div>
      <div className={classes.notifications}>Notifications</div>
      <VuesaxLinearNotification
        className={classes.vuesaxLinearNotification2}
        classes={{ vuesaxLinearNotification: classes.vuesaxLinearNotification }}
        swap={{
          vuesaxLinearNotification: (
            <div className={classes.vuesaxLinearNotification}>
              <VuesaxLinearNotificationIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <div className={classes.rectangle24553}></div>
      <VuesaxLinearSpeedometer
        className={classes.vuesaxLinearSpeedometer2}
        classes={{ vuesaxLinearSpeedometer: classes.vuesaxLinearSpeedometer }}
        swap={{
          vuesaxLinearSpeedometer: (
            <div className={classes.vuesaxLinearSpeedometer}>
              <VuesaxLinearSpeedometerIcon className={classes.icon3} />
            </div>
          ),
        }}
      />
      <div className={classes.dashboard}>Dashboard</div>
      <div className={classes.rectangle24554}></div>
      <div className={classes.mLSLists}>MLS Lists</div>
      <div className={classes.rectangle24555}></div>
      <VuesaxLinearProfile2user
        className={classes.vuesaxLinearProfile2user2}
        classes={{ vuesaxLinearProfile2user: classes.vuesaxLinearProfile2user }}
        swap={{
          vuesaxLinearProfile2user: (
            <div className={classes.vuesaxLinearProfile2user}>
              <VuesaxLinearProfile2userIcon className={classes.icon4} />
            </div>
          ),
        }}
      />
      <div className={classes.myClients}>My Clients</div>
      <div className={classes.rectangle2456}></div>
      <VuesaxLinearCalendar
        className={classes.vuesaxLinearCalendar2}
        classes={{ vuesaxLinearCalendar: classes.vuesaxLinearCalendar }}
        swap={{
          vuesaxLinearCalendar: (
            <div className={classes.vuesaxLinearCalendar}>
              <VuesaxLinearCalendarIcon className={classes.icon5} />
            </div>
          ),
        }}
      />
      <div className={classes.calendar}>Calendar</div>
      <div className={classes.rectangle24556}></div>
      <VuesaxLinearSearchStatus
        className={classes.vuesaxLinearSearchStatus2}
        classes={{ vuesaxLinearSearchStatus: classes.vuesaxLinearSearchStatus }}
        swap={{
          vuesaxLinearSearchStatus: (
            <div className={classes.vuesaxLinearSearchStatus}>
              <VuesaxLinearSearchStatusIcon className={classes.icon6} />
            </div>
          ),
        }}
      />
      <div className={classes.searchProperty}>Search Property</div>
      <VuesaxLinearMessageQuestion
        className={classes.vuesaxLinearMessageQuestion}
        swap={{
          vuesaxLinearMessageQuestion: <VuesaxLinearMessageQuestionIco className={classes.icon7} />,
        }}
      />
      <div className={classes.helpDesk}>Help Desk</div>
      <div className={classes.needHelp}>Need Help?</div>
      <div className={classes.rectangle24557}></div>
      <VuesaxLinearAdd
        className={classes.vuesaxLinearAdd}
        swap={{
          vuesaxLinearAdd: <VuesaxLinearAddIcon className={classes.icon8} />,
        }}
      />
      <div className={classes.createNewTour}>Create New Tour</div>
      <BlackIconSetArrowDownSLine
        className={classes.blackIconSetArrowDownSLine}
        classes={{ path3858: classes.path3858 }}
        swap={{
          path3859: <Path3859Icon className={classes.icon9} />,
        }}
      />
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon35} />
      </div>
      <div className={classes.berkayErdinc}>Berkay Erdinc</div>
      <div className={classes.hiBerkayerdincCom}>hi@berkayerdinc.com</div>
      <VuesaxLinearSetting2
        className={classes.vuesaxLinearSetting2}
        swap={{
          vuesaxLinearSetting2: <VuesaxLinearSetting2Icon className={classes.icon10} />,
        }}
      />
      <VuesaxLinearLogout
        className={classes.vuesaxLinearLogout}
        swap={{
          vuesaxLinearLogout: <VuesaxLinearLogoutIcon className={classes.icon11} />,
        }}
      />
      <VuesaxLinearSearchNormal
        className={classes.vuesaxLinearSearchNormal}
        swap={{
          vuesaxLinearSearchNormal: <VuesaxLinearSearchNormalIcon className={classes.icon12} />,
        }}
      />
      <div className={classes.frame1}></div>
      <VuesaxLinearNotification
        className={classes.vuesaxLinearNotification3}
        swap={{
          vuesaxLinearNotification: <VuesaxLinearNotificationIcon2 className={classes.icon13} />,
        }}
      />
      <div className={classes._5}>5</div>
      <div className={classes._2218ThornridgeCirE5579076}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>2218 Thornridge Cir..</span>
          <span className={classes.label2}> E5579076</span>
        </p>
      </div>
      <div className={classes.rectangle2470}></div>
      <BlackIconSetArrowLeftSLine
        className={classes.blackIconSetArrowLeftSLine}
        classes={{ path3902: classes.path3902 }}
        swap={{
          path3903: <Path3903Icon className={classes.icon14} />,
        }}
      />
      <div className={classes.rectangle2450}></div>
      <div className={classes.rectangle2478}></div>
      <div className={classes.rectangle24702}></div>
      <BlackIconSetArrowLeftSLine
        className={classes.blackIconSetArrowLeftSLine2}
        classes={{ path3902: classes.path39022 }}
        swap={{
          path3903: <Path3903Icon2 className={classes.icon15} />,
        }}
      />
      <div className={classes.rectangle2479}></div>
      <div className={classes.rectangle2448}></div>
      <div className={classes.frame6448}></div>
      <VuesaxLinearFatrows
        className={classes.vuesaxLinearFatrows}
        swap={{
          vuesaxLinearFatrows: <VuesaxLinearFatrowsIcon className={classes.icon16} />,
        }}
      />
      <div className={classes.shortcuts}>Shortcuts</div>
      <div className={classes.rectangle2452}></div>
      <div className={classes.propertyHistory}>Property History</div>
      <div className={classes.rectangle24522}></div>
      <div className={classes.keyFacts}>Key Facts</div>
      <VuesaxLinearKey
        className={classes.vuesaxLinearKey}
        swap={{
          vuesaxLinearKey: <VuesaxLinearKeyIcon className={classes.icon17} />,
        }}
      />
      <BlackIconSetHistoryLine
        className={classes.blackIconSetHistoryLine}
        classes={{ path4105: classes.path4105 }}
        swap={{
          path4106: <Path4106Icon className={classes.icon18} />,
        }}
      />
      <div className={classes.rectangle24523}></div>
      <div className={classes.demographics}>Demographics</div>
      <BlackIconSetDonutChartLine
        className={classes.blackIconSetDonutChartLine}
        classes={{ path488: classes.path488 }}
        swap={{
          path489: <Path489Icon className={classes.icon19} />,
        }}
      />
      <div className={classes.pointsOfInterest}>Points of interest</div>
      <VuesaxLinearLocationTick
        className={classes.vuesaxLinearLocationTick}
        swap={{
          vuesaxLinearLocationTick: <VuesaxLinearLocationTickIcon className={classes.icon20} />,
        }}
      />
      <div className={classes.rectangle2335}></div>
      <div className={classes.rectangle2336}></div>
      <div className={classes.notifySimilarProperties}>Notify similar properties</div>
      <div className={classes.rectangle2449}></div>
      <div className={classes.addList}>Add List</div>
      <div className={classes.mLSE5579076}>MLS#: E5579076</div>
      <div className={classes.listedFor1549586}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label3}>Listed for: </span>
          <span className={classes.label4}>$1,549,586</span>
        </p>
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.forSale}>For Sale</div>
      <div className={classes._2118ThornridgeCirSyracuseConne}>2118 Thornridge Cir. Syracuse, Connecticut 35624</div>
      <div className={classes.rectangle24524}></div>
      <div className={classes.viewOnMap}>View on Map</div>
      <VuesaxLinearMap
        className={classes.vuesaxLinearMap}
        swap={{
          vuesaxLinearMap: <VuesaxLinearMapIcon className={classes.icon21} />,
        }}
      />
      <div className={classes.rectangle24525}></div>
      <div className={classes.getDirections}>Get Directions</div>
      <BlackIconSetDirectionLine
        className={classes.blackIconSetDirectionLine}
        classes={{ path2978: classes.path2978 }}
        swap={{
          path2979: <Path2979Icon className={classes.icon22} />,
        }}
      />
      <div className={classes.rectangle24526}></div>
      <div className={classes.share}>Share</div>
      <BlackIconSetShareLine
        className={classes.blackIconSetShareLine}
        classes={{ path4293: classes.path4293 }}
        swap={{
          path4294: <Path4294Icon className={classes.icon23} />,
        }}
      />
      <div className={classes.rectangle2474}></div>
      <VuesaxLinearSms
        className={classes.vuesaxLinearSms}
        swap={{
          vuesaxLinearSms: <VuesaxLinearSmsIcon className={classes.icon24} />,
        }}
      />
      <div className={classes.courtneyHenry}>Courtney Henry</div>
      <div className={classes._905524898277}>+90 552 489 8277</div>
      <div className={classes.turkeyTR}></div>
      <div className={classes.vector5}>
        <VectorIcon5 className={classes.icon36} />
      </div>
      <div className={classes.vector6}>
        <VectorIcon6 className={classes.icon37} />
      </div>
      <div className={classes.vector7}>
        <VectorIcon7 className={classes.icon38} />
      </div>
      <div className={classes.vector8}>
        <VectorIcon8 className={classes.icon39} />
      </div>
      <div className={classes.myNotes}>My Notes</div>
      <div className={classes.listingAgent}>Listing Agent</div>
      <div className={classes.rectangle24527}></div>
      <VuesaxLinearNoteFavorite
        className={classes.vuesaxLinearNoteFavorite}
        swap={{
          vuesaxLinearNoteFavorite: <VuesaxLinearNoteFavoriteIcon className={classes.icon25} />,
        }}
      />
      <div className={classes.rectangle24492}></div>
      <div className={classes.rectangle24703}></div>
      <BlackIconSetArrowLeftSLine
        className={classes.blackIconSetArrowLeftSLine3}
        classes={{ path3902: classes.path39023 }}
        swap={{
          path3903: <Path3903Icon3 className={classes.icon26} />,
        }}
      />
      <div className={classes.propertyDetails}>Property Details</div>
      <div className={classes.keyFacts2}>Key Facts</div>
      <div className={classes.details}>Details</div>
      <div className={classes.rooms}>Rooms</div>
      <div className={classes.apartment}>Apartment</div>
      <VuesaxLinearBuilding4
        className={classes.vuesaxLinearBuilding4}
        swap={{
          vuesaxLinearBuilding4: <VuesaxLinearBuilding4Icon className={classes.icon27} />,
        }}
      />
      <div className={classes._3Bedrooms}>3 Bedrooms</div>
      <div className={classes.laBed}>
        <LaBedIcon className={classes.icon40} />
      </div>
      <div className={classes._2Bathrooms}>2 Bathrooms</div>
      <div className={classes.phBathtub}>
        <PhBathtubIcon className={classes.icon41} />
      </div>
      <div className={classes._2Garage}>2 Garage</div>
      <VuesaxLinearCar
        className={classes.vuesaxLinearCar}
        swap={{
          vuesaxLinearCar: <VuesaxLinearCarIcon className={classes.icon28} />,
        }}
      />
      <div className={classes._1963SqFt}>1,963 sq. ft.</div>
      <VuesaxLinearHome2
        className={classes.vuesaxLinearHome2}
        swap={{
          vuesaxLinearHome2: <VuesaxLinearHome2Icon className={classes.icon29} />,
        }}
      />
      <VuesaxLinearFormatSquare
        className={classes.vuesaxLinearFormatSquare}
        swap={{
          vuesaxLinearFormatSquare: <VuesaxLinearFormatSquareIcon className={classes.icon30} />,
        }}
      />
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat
        volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
      </div>
      <div className={classes.possesion}>Possesion</div>
      <div className={classes._5Day}>5 Day</div>
      <div className={classes.rectangle2483}></div>
      <div className={classes.mLS}>MLS#</div>
      <div className={classes.e5579076}>E5579076</div>
      <div className={classes.rectangle24832}></div>
      <div className={classes.size}>Size</div>
      <div className={classes._15002000Feet2}>1500 - 2000 feet2</div>
      <div className={classes.rectangle24833}></div>
      <div className={classes.parking}>Parking</div>
      <div className={classes.detached2Garage6Parking}>Detached 2 Garage, 6 Parking</div>
      <div className={classes.rectangle24834}></div>
      <div className={classes.buildingAge}>Building Age</div>
      <div className={classes._5Year}>5 Year</div>
      <div className={classes.rectangle24835}></div>
      <div className={classes.type}>Type</div>
      <div className={classes.singleFamily}>Single-Family</div>
      <div className={classes.rectangle24836}></div>
      <div className={classes.tax}>Tax</div>
      <div className={classes._13402022}>$1,340 / 2022</div>
      <div className={classes.rectangle24837}></div>
      <div className={classes.basement}>Basement</div>
      <div className={classes.unfinished}>Unfinished</div>
      <div className={classes.rectangle24838}></div>
      <div className={classes.description}>Description</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte2}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer
            placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus
            leo{' '}
          </span>
          <span className={classes.label6}>read more..</span>
        </p>
      </div>
      <div className={classes.rectangle2481}></div>
      <div className={classes.rectangle2482}></div>
      <div className={classes._1176SqFt}>1,176 sq. ft.</div>
    </div>
  );
});
