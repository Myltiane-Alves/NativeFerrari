import { useDrawerNavigation } from "../../hooks/useDrawerNavigation"
import { Button } from "../Button";
import { ScheduleServiceBody } from "./ScheduleServiceBody";
import { ScheduleServiceIcon } from "./ScheduleServiceIcon";
import { ScheduleServiceIconText } from "./ScheduleServiceIconText";
import { ScheduleServiceImage } from "./ScheduleServiceImage";
import { ScheduleServiceSubTitle } from "./ScheduleServiceSubTitle";
import { ScheduleServiceWrap } from "./ScheduleServiceWrap";
import servicesBackground from '../../assets/services-bg.png'
import { CreditCardsSvg } from "./CreditCardsSvg";
import { ToolsSvg } from "./ToolsSvg";
import { CalendarSvg } from "./CalendarSvg";
export const ScheduleService = () => {
    const navigation = useDrawerNavigation();

    return (
        <ScheduleServiceWrap>
            <ScheduleServiceBody>

                <ScheduleServiceSubTitle>como funcional?</ScheduleServiceSubTitle>
                <ScheduleServiceIcon>
                    <CalendarSvg />
                    <ScheduleServiceIconText> Escolha a Data e Hora </ScheduleServiceIconText>
                </ScheduleServiceIcon>

                <ScheduleServiceIcon>
                    <ToolsSvg />
                    <ScheduleServiceIconText> Escolha o Serviço  </ScheduleServiceIconText>
                </ScheduleServiceIcon>

                <ScheduleServiceIcon>
                    <CreditCardsSvg />
                    <ScheduleServiceIconText> Pague Online </ScheduleServiceIconText>
                </ScheduleServiceIcon>
                <Button
                    color="green"
                // onPress={() => navigation.navigate()}
                >
                    Agenar Serviço
                </Button>
            </ScheduleServiceBody>
            <ScheduleServiceImage source={servicesBackground} />
        </ScheduleServiceWrap>
    )
}