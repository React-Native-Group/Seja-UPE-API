import { Injectable } from "@nestjs/common";

@Injectable()
export class MiningService {
  
  capitalizeString(str: string) {
    let exploded = str.toLocaleLowerCase().split(' ');
    for (let i = 0; i < exploded.length; i++) {
      if (['de', 'da', 'do', 'das'].includes(exploded[i]))
        continue;
      exploded[i] = exploded[i].charAt(0).toLocaleUpperCase() + exploded[i].substring(1);
    }
    return exploded.join(' ');
  }

  getShortbioAreas(shortbio: string) {
    return shortbio.match(/(?:ENGENHARIA|ADMINISTRAÇÃO|SOFTWARE|COMPUTAÇÃO|EXATAS|MATEMÁTICA|DIREITO|BIOLOGIA|EDUCAÇÃO|ENFERMAGEM|AUTOMAÇÃO|ELÉTRICA|ELETRÔNICA|TELECOMUNICAÇÕES|MECÂNICA|MEDICINA|LOGÍSTICA|SAÚDE|PSICOLOGIA|ODONTOLOGIA|NUTRIÇÃO|GEOGRAFIA|CIÊNCIAS\sSOCIAIS|CIÊNCIAS\sBIOLÓGICAS|CIÊNCIAS\sEXATAS|CIÊNCIAS\sDAS\sNATUREZAS|QUÍMICA|HISTÓRIA|LETRAS|ESPANHOL|INGLÊS|PEDAGOGIA|GESTÃO|SEGURANÇA|CIBERSEGURANÇA|INFORMÁTICA|INTELIGÊNCIA\sARTIFICIAL)/igm)
      ?.map(s => s.toLocaleLowerCase())
      .filter((v, i, a) => a.indexOf(v) === i)
      .map(s => this.capitalizeString(s)) ?? [];
  }

}