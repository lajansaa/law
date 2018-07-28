<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" small color="primary" dark>{{ buttonLabel }}</v-btn>
      <v-card>

        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Generated Contract</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="downloadContract">Download</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid id="contract">
          <pre class="page">
Draft for Approval: __________________________    __________________________ 
                    Mr JASON ANG                  {{ data.spouse.lastName.toUpperCase() }} {{ data.spouse.firstName.toUpperCase() }}
                    Solicitor for the Plaintiff   Defendant-in-person


                                                  Before me


                                                  __________________________ 
                                                  A Commissioner for Oaths

<div style="textAlign: center;">
<b style="textDecoration: underline;">IN THE FAMILY JUSTINCE COURTS OF THE REPUBLIC OF SINGAPORE</b>
</div>

Divorce Suit No.	)
FC/D of {{ new Date().getFullYear() }}		)

                                  Between

                                  {{ data.client.lastName.toUpperCase() }} {{ data.client.firstName.toUpperCase() }}
                                  (Identification No. {{ data.client.identificationNumber }}) … Plaintiff

                                  And

                                  {{ data.spouse.lastName.toUpperCase() }} {{ data.spouse.firstName.toUpperCase() }}
                                  (Identification No. {{ data.spouse.identificationNumber }}) … Defendant
<div style="textAlign: center;">
<b style="textDecoration: underline;">DRAFT CONSENT ORDER</b>
</div>

1. Particulars of Marriage to which this Interim Judgement Relates (the Marriage)
   (a) Date and place of solemnization of marriage:
       {{ data.marriage.marriageDate }} at {{ data.marriage.marriageAddress }}
</pre>
<pre class="page">
   (b) Date and place of registration of marriage
       {{ data.marriage.registrationDate }} at {{ data.marriage.registrationAddress }}

2. Interim Judgement Granted in Chambers
   (a) Parties present:
       Not Applicable
   (b) Name of Judge:


(c) Pronouncement by the Judge:
    (i) that the Plaintiff has sufficiently proven the contents of the Statement of Claim; and
    (ii) Fact(s) relied upon for the irretrievable breakdown of the marriage (for the purposes of section 95(3) of the Women's Charter):

That the parties to the marriage have lived apart for a continuous period of at least 4 years immediately preceeding the filing of the writ.
unless sufficient cause be shown to the court within three (3) months from the making hereof why such Judgement should not be made final.

3. Further Orders Made (By consent):

    <span style="textDecoration: underline;">Divorce</span>
    (i) That the marriage be dissolved

</pre>
<pre class="page">
    
    <span style="textDecoration: underline;">Custody and care &amp; control of children of the marriage</span>
    (ii) The parties be granted joint custody of the to children of the marriage, namely the older son bla and the younger daughter bla with care and control of both children to the bla

    <span style="textDecoration: underline;">Access to the children of the marriage</span>
    (iii) The Plaintiff be granted access to the two children of the marriage namely the older son bla and the younger daughter bla on terms specified hereunder: from the timing of 5pm every Friday until 5pm every Sunday. During the aforementioned two children of the marriage to stay overnight at the Plaintiff's residence

    <span style="textDecoration: underline;">Maintenance for wife and for the children</span>
    (iv) No spousal maintenance is payable from the Defendant to the Plaintiff.

    (v) The Defendant shall bear solely the costs of maintenance for the two children of the marriage. Defendant shall pay a monthly maintenance of $1000.00 to the Plaintiff with the effect from the date of issuance of the Certificate of Final Judgement and subsequently the 1st of every month thereafter.
</pre>
<pre class="page">
    <span style="textDecoration: underline;">Division of the matrimonial assets (aside from the matrimonial home)</span>
    (vi) Each part shall retain for himself/herself all respective assets in his/her sole name as there is no matrimonial property.

    <span style="textDecoration: underline;">Costs (Divorce):</span>

    (vii) No order as to costs


4. Date Judgement Granted:

Signed		:
Registrar	:
Date 		:
</pre>
        </v-container>

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    name: 'ContractTemplate',
    props: [ 'buttonLabel', 'data' ],
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      prettify (word) {
        let converted = word.replace(/(?:^|\.?)([A-Z])/g, (p1, p2) => {return " " + p2})
        converted = converted.charAt(0).toUpperCase() + converted.substr(1)
        return converted
      },
      downloadContract () {
          let element = document.createElement('a');
          let contractContent = document.getElementById("contract").innerText;
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contractContent));
          element.setAttribute('download', 'contract');
  
          element.style.display = 'none';
          document.body.appendChild(element);
  
          element.click();
  
          document.body.removeChild(element);
      }
    }
}
</script>

<style>
pre {
    white-space: pre-wrap; 
}
.page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 2cm;
    margin: 1cm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    /* twice of font-size */
    line-height: 32px;
    /* font-family: 'Times New Roman', Times, serif; */
}

</style>
