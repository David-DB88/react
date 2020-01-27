// 1. Ստեղծել գլխավոր կոմպոնենտ,որը կպատկերի 5 ճաշատեսակ և նրա բաղադրությունը,(Ամեն մեկը առանձին կոմպոնենտում)
// 2․Ստեղծել այդ կոնկրետ ճաշատեսակի համար նախատեսված կոմպոնենտը, որի մեջ ստուգել props-ով եկող արժեքների ճշտությունը։
// 3․Ունենալ նաև Delete կոճակ, որը կջնջի տվըալ կոմպոնենտը։



// Տիպերի ստուգման Օրինակներ
// value: PropTypes.array, 
// value: PropTypes.bool,
// value: PropTypes.func,
// value: PropTypes.number,
// value: PropTypes.object,
// value: PropTypes.string,
// value: PropTypes.symbol,
​
​
// Կարելի է ավելացնել `isRequired` ցանկացած տիպի համար,
// որպեսզի հարուցվի զգուշացում, եթե այն փոխանցած չէ,
// чтобы показывать предупреждение,
// если проп не передан
// requiredFunc: PropTypes.func.isRequired,
​
// --------------------------------------------------------------
​
// Ցանկացած տիպի արժեք
// requiredAny: PropTypes.any.isRequired,
​
// --------------------------------------------------------------
​
//  React-элемент
//  PropTypes.element,
​
// --------------------------------------------------------------
​
// Կոնկրեն նշվածներից մեկը
// PropTypes.oneOf(['male', 'female']),
​
// --------------------------------------------------------------
​
// Օբյեկտ, նշված տիպերի ինչ-որ մեկը
// optionalUnion: PropTypes.oneOfType([
// 	PropTypes.oneOf(['male', 'female']),
// 	PropTypes.React.element
// ]),
​
// --------------------------------------------------------------
​
// Կոնկրետ տիպով օբյեկտների զանգված
// optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
​
// --------------------------------------------------------------
​
// Օբյեկտ, որի հատկությունները ունեն կոնկրետ տիպ
// optionalObjectOf: PropTypes.objectOf(PropTypes.number),
​
// --------------------------------------------------------------
​
// Օբյեկտ նախորոք որոշված կառուցվածքով
// optionalObjectWithShape: PropTypes.shape({
// 	color: PropTypes.string,
// 	fontSize: PropTypes.number
// }),
​
// --------------------------------------------------------------
​
// Օբյեկտ ԽԻՍՏ  կառուցվածքով
// Չհայտարարված հատկություններ դեպքում կգեներացվեն warning-ներ
// optionalObjectWithStrictShape: PropTypes.exact({
// 	name: PropTypes.string,
// 	quantity: PropTypes.number
// }), 
​
// --------------------------------------------------------------
​
// defaultProps
// Hotel.defaultProps = {
// 	name: 'Незнакомец'
// };
Collapse



















