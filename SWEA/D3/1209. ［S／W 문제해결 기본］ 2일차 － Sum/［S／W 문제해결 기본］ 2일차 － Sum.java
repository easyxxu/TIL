import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Solution {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		
		for(int i=0;i<10;i++) {
			int T = Integer.parseInt(br.readLine());
			int[][] arr = new int[100][100];
			int rowSum = 0, columnSum = 0, diaSum1 = 0, diaSum2 = 0;
			int rowMax = 0, columnMax = 0, diaMax = 0;
			int result = 0;
			
			// arr 담으면서 rowSum과 diaSum1구하기
			for(int j=0;j<100;j++) {
				st = new StringTokenizer(br.readLine());
				for(int k=0;k<100;k++) {
					arr[j][k] = Integer.parseInt(st.nextToken());
					rowSum += arr[j][k];
					rowMax = Math.max(rowSum, rowMax);
				}
				diaSum1 += arr[j][j];
				
				rowSum = 0;
			}
			
			// column 합의 최대값
			for(int j=0;j<100;j++) {
				for(int k=0;k<100;k++) {
					columnSum += arr[k][j];
					columnMax = Math.max(columnSum, columnMax);
				}
				columnSum = 0;
			}
			
			// diaSum2 구하기
			for(int j=99;j>=0;j--) {
				int k=0;
				diaSum2 += arr[j][k];
				k++;
			}

			diaMax = Math.max(diaSum1, diaSum2);
			result = Math.max(diaMax, columnMax);
			result = Math.max(result, rowMax);
			
			sb.append("#"+T+" "+result+"\n");
		}
		System.out.print(sb);
	}
}