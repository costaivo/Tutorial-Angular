3. Structural Directive ngSwitch
	``` typescript
		    <td [ngSwitch]='publication.IsActiveRecord'>
                 <img *ngSwitchWhen="true" src="./app/assets/images/Active.png" [style.width.px]='imageWidth' [style.margin.px]='imageMargin'>
                 <img *ngSwitchWhen="false" src="./app/assets/images/Inactive.png" [style.width.px]='imageWidth' [style.margin.px]='imageMargin'>
            <td>
	```
	
	
	
Creating Nested Components
