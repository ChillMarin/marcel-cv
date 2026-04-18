import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cvDataES, cvDataEN, CVData } from './cv-data';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  // Current language
  currentLang: 'es' | 'en' = 'es';

  // CV Data (loaded based on language)
  data!: CVData;

  // Shorthand accessors
  get personalInfo() { return this.data.personalInfo; }
  get impactMetrics() { return this.data.impactMetrics; }
  get professionalSummary() { return this.data.professionalSummary; }
  get avilaDevInfo() { return this.data.avilaDevInfo; }
  get workExperience() { return this.data.workExperience; }
  get featuredProjects() { return this.data.featuredProjects; }
  get technicalSkills() { return this.data.technicalSkills; }
  get education() { return this.data.education; }
  get certifications() { return this.data.certifications; }
  get softSkills() { return this.data.softSkills; }
  get languages() { return this.data.languages; }
  get titles() { return this.data.sectionTitles; }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get language from route data
    this.route.data.subscribe(data => {
      this.currentLang = data['lang'] || 'es';
      this.loadData();
    });
  }

  loadData(): void {
    this.data = this.currentLang === 'en' ? cvDataEN : cvDataES;
  }

  // Switch language
  switchLanguage(): void {
    const newLang = this.currentLang === 'es' ? 'en' : 'es';
    window.location.href = newLang === 'en' ? '/#/en' : '/#/';
  }

  // Get opposite language for button
  getOppositeLanguage(): string {
    return this.currentLang === 'es' ? 'English' : 'Español';
  }

  // Método para abrir enlaces externos
  openExternalLink(url: string): void {
    window.open(url, '_blank');
  }

  // Método para copiar email al portapapeles
  copyEmail(): void {
    navigator.clipboard.writeText(this.personalInfo.email);
  }
}
